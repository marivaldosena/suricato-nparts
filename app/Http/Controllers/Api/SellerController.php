<?php

namespace App\Http\Controllers\Api;

use App\Buyer;
use App\Http\Resources\BuyerResource;
use App\Http\Resources\SellerResource;
use App\Mail\CreatePasswordMail;
use App\Seller;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class SellerController extends Controller
{
    // todo - criar um repositorio para dispor essa e outras rules
    private $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email',

        'cnpj' => 'required|regex:/^[0-9]{14}$/',
        'company_name' => 'required',
        'trade_name' => 'required',
        'state_registration' => 'integer',
    ];

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store',]]);
    }

    /**
     * Display a listing of the Customers.
     * @return ResourceCollection
     */
    public function index()
    {
        return SellerResource::collection(Seller::with('user')->paginate(10));
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
        $this->validate($request, $this->rules);

        DB::beginTransaction();
        try{
            $password = bcrypt(Str::random(15));
            $verifyToken = Str::random(60);

            $user = User::firstOrCreate(['email' => $request->email,],[
                'name' => $request->name,
                'password' => $password,
                'type' => 'seller',
                'email_verify_token' => $verifyToken,
                'status' => '0',
            ]);

            $seller = Seller::create([
                'user_id' => $user->id,
                'cnpj' => $request->cnpj,
                'company_name' => $request->company_name,
                'trade_name' => $request->trade_name,
                'state_registration' => $request->state_registration,
            ]);

            /**
             * a criação de doc nao é obrigatoria.
             * a ideia é deixar ela opcional, pois o usuario pode escolher enviar os docs no momento do cadastro ou nao.
             * o fato é que, ao fazer login na plataforma, e os docs nao foram enviados,
             * ele receberá um alerta que deverá enviar os docs, para poder realizar anuncios,
             * caso contrário o usuario dele permanecerá com o status pendente
             *
             * todo isso será implementado no momento de alterar o front
             * [docs][1][file]
             * [docs][1][description]
             */
//            $seller->docs()->create([
//                'description' => '',
//                'path' => '',
//                'status' => '0',
//            ]);

            Mail::to($user)->queue(new CreatePasswordMail($user));

            DB::commit();
            return response('', 201);
        }catch (\Throwable $throwable){
            DB::rollBack();
            return response()->json(['message' => $throwable->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return SellerResource
     */
    public function show($id)
    {
        return new SellerResource(Seller::with('user')->findOrFail($id));
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

        DB::beginTransaction();
        try{

            $user = User::findOrFail($id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            $seller = $user->seller();
            $seller->update([
                'cnpj' => $request->cnpj,
                'company_name' => $request->company_name,
                'trade_name' => $request->trade_name,
                'state_registration' => $request->state_registration,
            ]);

            /**
            * todo isso será implementado no momento de alterar o front
            * [docs][1][file]
            * [docs][1][description]
            */
//            $seller->docs()->create([
//                'description' => '',
//                'path' => '',
//                'status' => '0',
//            ]);

            DB::commit();
            return response('', 204);
        }catch (\Throwable $throwable){
            DB::rollBack();
            return response()->json(['message' => $throwable->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response('', 204);
    }
}
