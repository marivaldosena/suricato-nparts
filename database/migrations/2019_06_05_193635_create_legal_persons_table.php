<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLegalPersonsTable extends Migration {

	public function up()
	{
		Schema::create('legal_persons', function(Blueprint $table) {
			$table->integer('customer_id')->primary()->unsigned();
			$table->string('cnpj', 14)->unique();
			$table->string('company_name', 200);
			$table->string('trade_name', 200);
			$table->string('state_registration', 14)->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('legal_persons');
	}
}
