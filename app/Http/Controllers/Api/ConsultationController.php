<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ConsultationRequestMail;
use App\Mail\ConsultationConfirmationMail;

class ConsultationController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'preferredDate' => 'nullable|date|after:today',
            'preferredTime' => 'nullable|string',
            'caseType' => 'nullable|string|in:commercial-dispute,debt-recovery,contract-dispute,arbitration,other',
            'message' => 'nullable|string|max:2000',
            'urgency' => 'required|string|in:normal,urgent,very-urgent',
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

            // Determine response time based on urgency
            $responseTime = match($data['urgency']) {
                'very-urgent' => '4 hours',
                'urgent' => '24 hours',
                default => '48 hours'
            };

            // Send email to law firm (you)
            Mail::to('john@martialmarketing.org')
                ->send(new ConsultationRequestMail($data, $responseTime));

            // Send confirmation email to client
            Mail::to($data['email'])
                ->send(new ConsultationConfirmationMail($data, $responseTime));

            return response()->json([
                'success' => true,
                'message' => 'Consultation request submitted successfully',
                'data' => [
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'urgency' => $data['urgency'],
                    'response_time' => $responseTime
                ]
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Consultation request failed: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Failed to submit consultation request. Please try again later.'
            ], 500);
        }
    }
}