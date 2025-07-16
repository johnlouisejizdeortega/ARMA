<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactMessageMail;

class ContactMessageController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'message' => 'required|string|max:2000',
            'isDataProtectionRequest' => 'boolean',
            'source' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = $validator->validated();
            $data['submitted_at'] = now();
            $data['ip_address'] = $request->ip();
            $data['user_agent'] = $request->userAgent();

            // Simple approach: Use Laravel's Mail::raw for basic email
            $emailContent = "
CONTACT FORM MESSAGE
===================

Message: {$data['message']}

Type: " . ($data['isDataProtectionRequest'] ?? false ? 'Data Protection Request' : 'General Inquiry') . "
Source: {$data['source']}
IP Address: {$data['ip_address']}
Submitted: {$data['submitted_at']}
            ";

            Mail::raw($emailContent, function ($message) use ($data) {
                $message->to('john@martialmarketing.org')
                       ->subject('📧 Contact Form Message - ARMA Litigation')
                       ->from('john@martialmarketing.org', 'ARMA Litigation Website');
            });

            return response()->json([
                'success' => true,
                'message' => 'Your message has been sent successfully',
                'data' => [
                    'type' => $data['isDataProtectionRequest'] ?? false ? 'data_protection' : 'general',
                    'submitted_at' => $data['submitted_at']
                ]
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Contact message failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to send message. Please try again later.'
            ], 500);
        }
    }
}