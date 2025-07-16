{{-- resources/views/emails/consultation-request.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">ARMA LITIGATION</h1>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">New Consultation Request</p>
        </div>
        
        <!-- Content -->
        <div style="background: #f8f9fa; padding: 30px; border-left: 4px solid #00A0E9;">
            <h2 style="color: #333; margin-top: 0;">Consultation Request Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                    <td style="padding: 10px 0; color: #333;">{{ $consultationData['name'] }}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                    <td style="padding: 10px 0; color: #333;">
                        <a href="mailto:{{ $consultationData['email'] }}" style="color: #00A0E9;">{{ $consultationData['email'] }}</a>
                    </td>
                </tr>
                @if(!empty($consultationData['phone']))
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                    <td style="padding: 10px 0; color: #333;">
                        <a href="tel:{{ $consultationData['phone'] }}" style="color: #00A0E9;">{{ $consultationData['phone'] }}</a>
                    </td>
                </tr>
                @endif
                @if(!empty($consultationData['preferredDate']))
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Date:</td>
                    <td style="padding: 10px 0; color: #333;">
                        {{ \Carbon\Carbon::parse($consultationData['preferredDate'])->format('l, F j, Y') }}
                    </td>
                </tr>
                @endif
                @if(!empty($consultationData['preferredTime']))
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Time:</td>
                    <td style="padding: 10px 0; color: #333;">{{ $consultationData['preferredTime'] }}</td>
                </tr>
                @endif
                @if(!empty($consultationData['caseType']))
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Case Type:</td>
                    <td style="padding: 10px 0; color: #333;">{{ ucwords(str_replace('-', ' ', $consultationData['caseType'])) }}</td>
                </tr>
                @endif
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Urgency:</td>
                    <td style="padding: 10px 0; color: #333;">
                        <span style="display: inline-block; background: 
                            @if($consultationData['urgency'] === 'very-urgent') #dc3545 
                            @elseif($consultationData['urgency'] === 'urgent') #fd7e14 
                            @else #28a745 @endif; 
                            color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                            {{ str_replace('-', ' ', $consultationData['urgency']) }}
                        </span>
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Submitted:</td>
                    <td style="padding: 10px 0; color: #333;">{{ $consultationData['submitted_at']->format('d/m/Y H:i') }}</td>
                </tr>
            </table>
            
            @if(!empty($consultationData['message']))
            <div style="margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Case Description:</h3>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #00A0E9;">
                    <p style="margin: 0; color: #333; line-height: 1.6;">{{ nl2br(e($consultationData['message'])) }}</p>
                </div>
            </div>
            @endif
            
            <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 5px;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                    <strong>Next Steps:</strong> Please respond to this consultation request within {{ $responseTime }} 
                    to meet the client's urgency requirements.
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">ARMA Litigation Limited | 84 Albion Street, Leeds, LS1 6AD</p>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">This email was generated from the website consultation form</p>
        </div>
    </div>
</body>
</html>

{{-- ================================ --}}

{{-- resources/views/emails/consultation-confirmation.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultation Request Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">ARMA LITIGATION</h1>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">Consultation Request Received</p>
        </div>
        
        <!-- Content -->
        <div style="background: #f8f9fa; padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Thank you for your consultation request</h2>
            
            <p style="color: #333; line-height: 1.6;">Dear {{ $consultationData['name'] }},</p>
            
            <p style="color: #333; line-height: 1.6;">
                We have received your consultation request and will respond within {{ $responseTime }}.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00A0E9; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Your Request Summary:</h3>
                <ul style="color: #333; line-height: 1.6;">
                    @if(!empty($consultationData['preferredDate']))
                        <li><strong>Preferred Date:</strong> {{ \Carbon\Carbon::parse($consultationData['preferredDate'])->format('d/m/Y') }}</li>
                    @endif
                    @if(!empty($consultationData['preferredTime']))
                        <li><strong>Preferred Time:</strong> {{ $consultationData['preferredTime'] }}</li>
                    @endif
                    @if(!empty($consultationData['caseType']))
                        <li><strong>Case Type:</strong> {{ ucwords(str_replace('-', ' ', $consultationData['caseType'])) }}</li>
                    @endif
                </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
                If you have any urgent questions in the meantime, please don't hesitate to contact us directly at 
                <a href="mailto:contact@armalitigation.com" style="color: #00A0E9;">contact@armalitigation.com</a> 
                or call our office.
            </p>
            
            <p style="color: #333; line-height: 1.6;">Best regards,<br><strong>ARMA Litigation Team</strong></p>
        </div>
        
        <!-- Footer -->
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">ARMA Litigation Limited | 84 Albion Street, Leeds, LS1 6AD</p>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">Company No: 13083355 | SRA No: 812983</p>
        </div>
    </div>
</body>
</html>