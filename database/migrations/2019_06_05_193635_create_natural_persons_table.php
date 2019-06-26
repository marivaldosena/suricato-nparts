<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNaturalPersonsTable extends Migration {

	public function up()
	{
		Schema::create('natural_persons', function(Blueprint $table) {
			$table->integer('customer_id')->primary()->unsigned();
			$table->string('cpf', 11)->unique();
			$table->string('rg', 14)->nullable();
			$table->date('birthday');
			$table->enum('gender', array('M', 'F'))->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('natural_persons');
	}
}
