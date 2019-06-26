<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductPhotosTable extends Migration {

	public function up()
	{
		Schema::create('product_photos', function(Blueprint $table) {
			$table->increments('id');
			$table->string('path', 50);
			$table->timestamps();
			$table->integer('product_id')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('product_photos');
	}
}
