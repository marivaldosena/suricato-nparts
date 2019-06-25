<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use App\Http\Resources\NaturalPersonResource;
use App\NaturalPerson;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

class NaturalPersonController extends Controller
{
    private $rules = [
        'cpf' => 'required|regex:/^[0-9]{11}$/',
        'birthday' => 'required|date_format:Y-m-d',
    ];

    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection
     */
    public function index()
    {
        return NaturalPersonResource::collection(Customer::with(['naturalPersonInfo', 'user'])
            ->whereHas('user', function ($q){
                $q->where('type', 2);
            })->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->rules['user_id'] = 'required|integer';

        $this->validate($request, $this->rules);

        // todo - solução para um erro no conceito de herança de models no Laravel
        $id = false;

        DB::beginTransaction();
        try{
            $customer = new Customer;
            $customer->user_id = $request->user_id;
            $customer->status = '1';
            $customer->save();

            // todo - solução para um erro no conceito de herança de models no Laravel
            $id = $customer->id;

            $naturalPerson = new NaturalPerson;
            $naturalPerson->customer_id = $customer->id;
            $naturalPerson->cpf = $request->cpf;
            $naturalPerson->rg = $request->rg;
            $naturalPerson->birthday = $request->birthday;
            $naturalPerson->gender = $request->gender;

            $naturalPerson->save();

            DB::commit();
            return response('', 201);
        }catch (\Throwable $t){

            // todo - solução para um erro no conceito de herança de models no Laravel
            if($id){
                Customer::destroy($id);
            }

            DB::rollBack();
            return response()->json(['message' => $t->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return NaturalPersonResource
     */
    public function show($id)
    {
        return new NaturalPersonResource(Customer::with(['naturalPersonInfo', 'user'])->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, $this->rules);

        $customer = Customer::findOrFail($id);
        $customer->update([
            'user_id' => $request->user_id,
        ]);

        $naturalPerson = $customer->naturalPersonInfo();
        $naturalPerson->update([
            'cpf' => $request->cpf,
            'rg' => $request->rg,
            'birthday' => $request->birthday,
            'gender' => $request->gender,
        ]);

        return response('', 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);

        DB::beginTransaction();
        try{
            $customer->delete();
            $customer->user()->delete();
            $customer->naturalPersonInfo()->delete();

            DB::commit();
            return response('', 204);
        }catch (\Throwable $t){
            DB::rollBack();
            return response()->json(['message' => $t->getMessage()], 500);
        }
    }
}
