<?php
// app/Mail/ConsultationConfirmationMail.php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ConsultationConfirmationMail extends Mailable
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
        return $this->subject('Consultation Request Received - ARMA Litigation')
                    ->view('emails.consultation-confirmation');
    }
}