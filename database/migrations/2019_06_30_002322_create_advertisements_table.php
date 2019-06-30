<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdvertisementsTable extends Migration {

	public function up()
	{
		Schema::create('advertisements', function(Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
			$table->integer('seller_id')->unsigned();
			$table->integer('product_id')->unsigned();
			$table->text('description');
			$table->double('price');
			$table->enum('status', array('0', '1'));
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('advertisements');
	}
}
