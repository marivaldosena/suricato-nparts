<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSellerDocsTable extends Migration {

	public function up()
	{
		Schema::create('seller_docs', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
			$table->string('description', 45);
			$table->string('path');
			$table->enum('status', array('0', '1', '2'));
			$table->timestamps();
			$table->integer('seller_id')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('seller_docs');
	}
}
