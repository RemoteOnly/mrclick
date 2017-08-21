<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('file_name')->nullable();
            $table->string('file_mime')->nullable();
            $table->string('file_s3_bucket')->nullable();
            $table->string('file_url')->nullable();
            $table->unsignedInteger('file_size')->nullable();
            $table->string('thumbnail_s3_bucket')->nullable();
            $table->string('thumbnail_url')->nullable();
            $table->unsignedTinyInteger('is_rich_text')->default(0);
            $table->json('other_info')->nullable()->comment('');
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachments');
    }
}
