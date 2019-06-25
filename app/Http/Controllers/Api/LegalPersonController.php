<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use App\Http\Resources\LegalPersonResource;
use App\LegalPerson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

class LegalPersonController extends Controller
{
    private $rules = [
        'cnpj' => 'required|regex:/^[0-9]{14}$/',
        'company_name' => 'required',
        'trade_name' => 'required',
        'state_registration' => 'integer',
    ];

    /**
     * Display a listing of the resource.
     *
     * @return ResourceCollection
     */
    public function index()
    {
        return LegalPersonResource::collection(Customer::with('legalPersonInfo')
            ->whereHas('user', function ($q){
                $q->where('type', 3);
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

        DB::beginTransaction();
        try{
            $customer = new Customer;
            $customer->user_id = $request->user_id;
            $customer->status = '1';
            $customer->save();

            $legalPerson = new LegalPerson;
            $legalPerson->customer_id = $customer->id;
            $legalPerson->cnpj = $request->cnpj;
            $legalPerson->company_name = $request->company_name;
            $legalPerson->trade_name = $request->trade_name;
            $legalPerson->state_registration = $request->state_registration;
            $legalPerson->save();

            DB::commit();
            return response('', 201);
        }catch (\Throwable $t){
            DB::rollBack();
            return response()->json(['message' => $t->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return LegalPersonResource
     */
    public function show($id)
    {
        return new LegalPersonResource(Customer::with(['legalPersonInfo', 'user'])->findOrFail($id));
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

        $legalPerson = $customer->legalPersonInfo();
        $legalPerson->update([
            'cnpj' => $request->cnpj,
            'company_name' => $request->company_name,
            'trade_name' => $request->trade_name,
            'state_registration' => $request->state_registration,
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
            $customer->legalPersonInfo()->delete();

            DB::commit();
            return response('', 204);
        }catch (\Throwable $t){
            DB::rollBack();
            return response()->json(['message' => $t->getMessage()], 500);
        }
    }
}
