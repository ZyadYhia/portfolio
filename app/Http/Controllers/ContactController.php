<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    public function send(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:100',
            'message' => 'required|string|max:2000',
        ]);

        Mail::to('zeyad.yhia95@gmail.com')
            ->send(new ContactMail($validated));

        return back()->with('success', 'Message sent!');
    }
}
