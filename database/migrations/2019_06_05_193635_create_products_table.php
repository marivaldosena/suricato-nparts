<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	public function up()
	{
		Schema::create('products', function(Blueprint $table) {
			$table->increments('id');
			$table->string('partnumber', 25);
			$table->string('name', 80);
			$table->string('manufacturer', 30);
			$table->double('weight');
			$table->double('height');
			$table->double('width');
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('products');
	}
}
