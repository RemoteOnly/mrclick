<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test_password', function () {
    return bcrypt('666666');
});

Route::group(['as' => 'home.', 'namespace' => 'Home'], function () {
    Route::get('/', 'HomeController@index')->name('index');
    Route::get('/term', 'HomeController@term')->name('term');
    Route::get('/policy', 'HomeController@policy')->name('policy');
});


Route::group(['namespace' => 'Auth'], function () {
    // Authentication Routes...
    $this->get('login', 'LoginController@showLoginForm')->name('login');
    $this->post('login', 'LoginController@login');
    $this->get('logout', 'LoginController@logout')->name('logout');

    // Registration Routes...
    $this->get('register', 'RegisterController@showRegistrationForm')->name('register');
    $this->post('register', 'RegisterController@register');

    // Password Reset Routes...
    $this->get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
    $this->post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    $this->get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');
    $this->post('password/reset', 'ResetPasswordController@reset');
});

Route::group(['as' => 'teacher.', 'namespace' => 'Teacher', 'middleware' => 'auth:teachers'], function () {
    Route::group(['prefix' => 'school'], function () {
        Route::get('/index', 'SchoolController@index')->name('school.index');
    });

    Route::post('/switch_account', 'CommonController@switchAccount')->name('switch_account');
});

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['auth:teachers', 'is_admin']], function () {
    Route::resource('/teachers', 'TeacherController');
});



