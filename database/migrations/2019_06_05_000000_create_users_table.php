<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table) {
			$table->increments('id');
			$table->string('name', 40);
			$table->string('email', 40)->unique();
			$table->string('email_verify_token', 60)->nullable();
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password', 80);
			$table->enum('type', array('1', '2', '3'));
			$table->rememberToken('rememberToken');
            $table->enum('status', ['0', '1']);
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('users');
	}
}
