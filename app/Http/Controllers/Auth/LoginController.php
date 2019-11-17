<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    // protected $redirectTo = '/home';
    protected function redirectTo()
    {
        if (Auth::user()->user_type == 'user') {
            return 'home';
        } else if (Auth::user()->user_type == 'admin') {
            return 'admin';
        }
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}