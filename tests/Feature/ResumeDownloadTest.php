<?php

use Illuminate\Support\Facades\Storage;

it('downloads the resume PDF', function () {
    Storage::disk('public')->put('Zyad_Yhia_CV.pdf', 'fake-pdf-content');

    $response = $this->get(route('resume.download'));

    $response->assertSuccessful();
    $response->assertDownload('Zyad_Yhia_CV.pdf');
});

it('returns 404 when resume file is missing', function () {
    Storage::fake('public');

    $response = $this->get(route('resume.download'));

    $response->assertNotFound();
});
