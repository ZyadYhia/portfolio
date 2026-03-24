<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ResumeController extends Controller
{
    public function __invoke(): StreamedResponse
    {
        abort_unless(Storage::disk('public')->exists('Zyad_Yhia_CV.pdf'), 404);

        return Storage::disk('public')->download('Zyad_Yhia_CV.pdf', 'Zyad_Yhia_CV.pdf');
    }
}
