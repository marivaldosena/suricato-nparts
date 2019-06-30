<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
			$table->string('name', 40);
			$table->string('email', 40)->unique();
			$table->string('email_verify_token');
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password', 80);
			$table->enum('type', array('admin', 'buyer', 'seller'));
			$table->rememberToken('rememberToken');
			$table->enum('status', array('0', '1')); // 0 inativo, 1 ativo
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('users');
	}
}
