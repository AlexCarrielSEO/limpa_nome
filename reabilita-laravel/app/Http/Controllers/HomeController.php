<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display the home page.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Display the section pages (redirects to home with anchor).
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function section($section)
    {
        return redirect()->route('home') . "#{$section}";
    }
}