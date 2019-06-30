<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('buyers', function(Blueprint $table) {
			$table->foreign('user_id')->references('id')->on('users')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('sellers', function(Blueprint $table) {
			$table->foreign('user_id')->references('id')->on('users')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('addresses', function(Blueprint $table) {
			$table->foreign('user_id')->references('id')->on('users')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->foreign('seller_id')->references('user_id')->on('sellers')
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
		Schema::table('seller_docs', function(Blueprint $table) {
			$table->foreign('seller_id')->references('user_id')->on('sellers')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
	}

	public function down()
	{
		Schema::table('buyers', function(Blueprint $table) {
			$table->dropForeign('buyers_user_id_foreign');
		});
		Schema::table('sellers', function(Blueprint $table) {
			$table->dropForeign('sellers_user_id_foreign');
		});
		Schema::table('addresses', function(Blueprint $table) {
			$table->dropForeign('addresses_user_id_foreign');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->dropForeign('advertisements_seller_id_foreign');
		});
		Schema::table('advertisements', function(Blueprint $table) {
			$table->dropForeign('advertisements_product_id_foreign');
		});
		Schema::table('product_photos', function(Blueprint $table) {
			$table->dropForeign('product_photos_product_id_foreign');
		});
		Schema::table('seller_docs', function(Blueprint $table) {
			$table->dropForeign('seller_docs_seller_id_foreign');
		});
	}
}