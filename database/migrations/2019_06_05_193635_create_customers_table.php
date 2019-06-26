<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCustomersTable extends Migration {

	public function up()
	{
		Schema::create('customers', function(Blueprint $table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->enum('status', array('0', '1', '2'));
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('customers');
	}
}
