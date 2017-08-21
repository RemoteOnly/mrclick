<?php

namespace App\Http\Controllers\Teacher;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommonController extends Controller
{
    public function switchAccount(Request $request)
    {
        if ($request->ajax()) {
            $target_id = $request->get('id');
            Auth::logout();
            $user = Auth::loginUsingId($target_id);
            if ($user) {
                return response()->json(['status' => 1, 'school_slug' => $user->school->slug]);
            } else {
                return response()->json(['status' => 0]);
            }
        }
    }
}
