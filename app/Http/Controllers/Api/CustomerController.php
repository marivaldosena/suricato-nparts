<?php

namespace App\Http\Controllers\Api;

use App\Customer;
use App\Http\Resources\CustomerResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CustomerController extends Controller
{
    private $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email',
//        'password' => 'required|min:6|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
        'type' => 'required'
    ];

    /**
     * Display a listing of the Customer.
     *
     * @return ResourceCollection
     */
    public function index()
    {
        return CustomerResource::collection(Customer::paginate(10));
    }

    /**
     * Store a newly created Customer in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
    }

    /**
     * Display the specified Customer.
     *
     * @param  int  $id
     * @return JsonResource
     */
    public function show($id)
    {
        return new CustomerResource(Customer::findOrFail($id));
    }

    /**
     * Update the specified Customer in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, $this->rules);
    }

    /**
     * Remove the specified Customer from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);

        $customer->delete();

        return response(null, 204);
    }
}
