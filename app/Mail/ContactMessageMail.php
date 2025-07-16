<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public $messageData;

    public function __construct($messageData)
    {
        $this->messageData = $messageData;
    }

    public function build()
    {
        $isDataProtection = $this->messageData['isDataProtectionRequest'] ?? false;
        
        $subject = $isDataProtection 
            ? '🔒 Data Protection Inquiry - ARMA Litigation'
            : '📧 New Contact Message - ARMA Litigation';

        // Use the same email template as consultation (which works!)
        return $this->subject($subject)
                    ->view('emails.consultation-request')
                    ->with([
                        'consultationData' => [
                            'name' => 'Website Contact Form User',
                            'email' => 'via-website-contact@armalitigation.com',
                            'phone' => '',
                            'preferredDate' => '',
                            'preferredTime' => '',
                            'caseType' => $isDataProtection ? 'data-protection' : 'general-inquiry',
                            'message' => $this->messageData['message'],
                            'urgency' => 'normal',
                            'submitted_at' => $this->messageData['submitted_at'],
                            'source' => $this->messageData['source'] ?? 'website_contact_form'
                        ],
                        'responseTime' => '48 hours'
                    ]);
    }
}