<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBuyersTable extends Migration {

	public function up()
	{
		Schema::create('buyers', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->integer('user_id')->primary()->unsigned();
			$table->string('cpf', 11)->unique();
			$table->string('rg', 14)->nullable();
			$table->date('birthday');
			$table->enum('gender', array('M', 'F'))->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('buyers');
	}
}
