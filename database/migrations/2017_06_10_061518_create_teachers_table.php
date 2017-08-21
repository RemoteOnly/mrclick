<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('name');
            $table->string('name_kana')->nullable();
            $table->string('teacher_no')->unique();
            $table->string('password');

            $table->string('email');
            $table->string('email_password');

            $table->string('telephone')->nullable();
            $table->string('icon_url')->nullable();
            $table->string('icon_s3_bucket')->nullable();

            $table->unsignedInteger('school_id');
            $table->string('omise_id')->nullable();
            $table->unsignedTinyInteger('role_code')->nullable()->comment('0-parttime 1-fulltime 2-admin 3-president');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('school_id')->references('id')->on('schools')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teachers');
    }
}
