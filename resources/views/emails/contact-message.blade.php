<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $messageData['isDataProtectionRequest'] ?? false ? 'Data Protection Inquiry' : 'Contact Message' }}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">ARMA LITIGATION</h1>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">
                {{ $messageData['isDataProtectionRequest'] ?? false ? 'Data Protection Inquiry' : 'New Contact Message' }}
            </p>
        </div>
        
        <!-- Content -->
        <div style="background: #f8f9fa; padding: 30px; border-left: 4px solid #00A0E9;">
            <h2 style="color: #333; margin-top: 0;">Message Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555; width: 30%;">Type:</td>
                    <td style="padding: 10px 0; color: #333;">
                        @if($messageData['isDataProtectionRequest'] ?? false)
                            <span style="background: #dc3545; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                                Data Protection Request
                            </span>
                        @else
                            <span style="background: #28a745; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
                                General Inquiry
                            </span>
                        @endif
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">IP Address:</td>
                    <td style="padding: 10px 0; color: #333;">{{ $messageData['ip_address'] ?? 'Unknown' }}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px 0; font-weight: bold; color: #555;">Source:</td>
                    <td style="padding: 10px 0; color: #333;">{{ $messageData['source'] ?? 'Website Contact Form' }}</td>
                </tr>
            </table>
            
            <div style="margin: 20px 0;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <div style="background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #00A0E9;">
                    <p style="margin: 0; color: #333; line-height: 1.6;">{!! nl2br(e($messageData['message'])) !!}</p>
                </div>
            </div>
            
            @if($messageData['isDataProtectionRequest'] ?? false)
            <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px;">
                <p style="margin: 0; color: #856404; font-size: 14px;">
                    <strong>⚠️ Data Protection Request:</strong> This message requires attention from the Data Protection Officer. 
                    Please respond within the required timeframe as per GDPR regulations.
                </p>
            </div>
            @else
            <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 5px;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                    <strong>Next Steps:</strong> Please respond to this inquiry in a timely manner. 
                    For urgent matters, contact the client directly.
                </p>
            </div>
            @endif
        </div>
        
        <!-- Footer -->
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">ARMA Litigation Limited | 84 Albion Street, Leeds, LS1 6AD</p>
            <p style="margin: 5px 0 0 0; color: #00A0E9;">This email was generated from the website contact form</p>
        </div>
    </div>
</body>
</html>