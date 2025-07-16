<?php
// app/Mail/ConsultationRequestMail.php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ConsultationRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $consultationData;
    public $responseTime;

    public function __construct($consultationData, $responseTime)
    {
        $this->consultationData = $consultationData;
        $this->responseTime = $responseTime;
    }

    public function build()
    {
        $urgencyPrefix = match($this->consultationData['urgency']) {
            'very-urgent' => '🔴 URGENT',
            'urgent' => '🟡 URGENT',
            default => '🟢'
        };

        return $this->subject("{$urgencyPrefix} New Consultation Request - {$this->consultationData['name']}")
                    ->replyTo($this->consultationData['email'])
                    ->view('emails.consultation-request');
    }
}