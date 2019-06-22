<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('customers', function(Blueprint $table) {
			$table->foreign('user_id')->references('id')->on('users')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('natural_persons', function(Blueprint $table) {
			$table->foreign('customer_id')->references('id')->on('customers')
						->onDelete('cascade')
						->onUpdate('no action');
		});
		Schema::table('legal_persons', function(Blueprint $table) {
			$table->foreign('customer_id')->references('id')->on('customers')
						->onDelete('cascade')
						->onUpdate('no action');
		});
		Schema::table('addresses', function(Blueprint $table) {
			$table->foreign('customer_id')->references('id')->on('customers')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->foreign('customer_id')->references('id')->on('customers')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->foreign('product_id')->references('id')->on('products')
						->onDelete('no action')
						->onUpdate('no action');
		});
		Schema::table('product_photos', function(Blueprint $table) {
			$table->foreign('product_id')->references('id')->on('products')
						->onDelete('cascade')
						->onUpdate('no action');
		});
	}

	public function down()
	{
		Schema::table('customers', function(Blueprint $table) {
			$table->dropForeign('customers_user_id_foreign');
		});
		Schema::table('natural_persons', function(Blueprint $table) {
			$table->dropForeign('natural_persons_customer_id_foreign');
		});
		Schema::table('legal_persons', function(Blueprint $table) {
			$table->dropForeign('legal_persons_customer_id_foreign');
		});
		Schema::table('addresses', function(Blueprint $table) {
			$table->dropForeign('addresses_customer_id_foreign');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->dropForeign('advertisements_customer_id_foreign');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->dropForeign('advertisements_product_id_foreign');
		});
		Schema::table('product_photos', function(Blueprint $table) {
			$table->dropForeign('product_photos_product_id_foreign');
		});
	}
}
