<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Cache;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/school/index';

    protected $teacher_repo;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    //region  Overwrite
    protected function credentials(Request $request)
    {
        if ($request->has('teacher_no')) {
            Teacher::$auth_password = 'password';
            $data = $request->only('teacher_no', 'password');
        } else if ($request->has('email')) {
            Teacher::$auth_password = 'email_password';
            $data = [
                'email' => $request->get('email'),
                'password' => $request->get('email_password')
            ];
        } else {
            Teacher::$auth_password = 'password';
            $data = $request->only('student_no', 'password');
        }

        return $data;
    }

    protected function guard()
    {
        if (request()->has('students')) {
            return Auth::guard('students');
        } else {
            return Auth::guard('teachers');
        }
    }

    protected function validateLogin(Request $request)
    {
        if ($request->has('teacher_no')) {
            $rules = [
                'teacher_no' => 'required|numeric|min:7',
                'password' => 'required|string'];
        } else if ($request->has('email')) {
            $rules = [
                'email' => 'required|email',
                'email_password' => 'required|string'];
        } else {
            $rules = [
                'student_no' => 'required|numeric|min:6',
                'password' => 'required|string'];
        }

        $this->validate($request, $rules);
    }

    public function username()
    {
        if (request()->has('teacher_no'))
            return 'teacher_no';
        if (request()->has('email'))
            return 'email';
        if (request()->has('student_no'))
            return 'student_no';
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->flush();

        $request->session()->regenerate();

        return redirect('/');
    }

    public function redirectTo()
    {
        return '/school/index';
    }
    //endregion

}
