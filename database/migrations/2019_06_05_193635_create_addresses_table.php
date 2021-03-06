<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAddressesTable extends Migration {

	public function up()
	{
		Schema::create('addresses', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('customer_id')->unsigned();
			$table->string('zip_code', 8);
			$table->string('street', 100);
			$table->string('complement', 100)->nullable();
			$table->string('number', 10);
			$table->string('neighborhood', 30);
			$table->string('city', 30);
			$table->string('state', 30);
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('addresses');
	}
}
