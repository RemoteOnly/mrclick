<?php

namespace App\Http\Middleware;

use Cache;
use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            $teacher = Auth::user();
            $school_slug = Cache::remember('school_slug.' . $teacher->id, env('CACHE_MINuTES', 120), function () use ($teacher) {
                return $teacher->school->slug;
            });

            return redirect('/school/' . $school_slug . '/index');
        }

        return $next($request);
    }
}
