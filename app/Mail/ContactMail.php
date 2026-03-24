<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(protected array $data)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Portfolio contact from {$this->data['name']}",
            replyTo: [$this->data['email']],
        );
    }


    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(view: 'emails.contact', with: $this->data);
    }
}
