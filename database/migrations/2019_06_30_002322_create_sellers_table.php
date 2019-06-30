<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSellersTable extends Migration {

	public function up()
	{
		Schema::create('sellers', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->integer('user_id')->primary()->unsigned();
			$table->string('cnpj', 14)->unique();
			$table->string('company_name', 200);
			$table->string('trade_name', 200);
			$table->string('state_registration', 14)->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('sellers');
	}
}
