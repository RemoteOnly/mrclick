<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Migration auto-generated by Sequel Pro Laravel Export
 * @see https://github.com/cviebrock/sequel-pro-laravel-export
 */
class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('student_no');
            $table->string('name');
            $table->string('password');
            $table->string('name_kana')->nullable();
            $table->unsignedInteger('school_id')->nullable();
            $table->unsignedTinyInteger('sex')->default(0)->comment('0-girl 1-boy');
            $table->date('birthday')->nullable();
            $table->string('avatar')->nullable();
            $table->string('avatar_s3_bucket')->nullable();
            $table->string('description')->nullable();
            $table->unsignedTinyInteger('is_active_app')->default(0)->comment('0-inactivated 1-actived');
            $table->rememberToken();
            $table->nullableTimestamps();
            $table->softDeletes();

            $table->foreign('school_id')->references('id')->on('schools')
                ->onUpdate('cascade')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
