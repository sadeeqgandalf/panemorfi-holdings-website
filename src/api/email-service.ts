// Email service integration for sending acquisition guides
// This handles the backend email delivery system

export interface EmailRequest {
  email: string;
  interest: string;
  guide: {
    title: string;
    filename: string;
    description: string;
    preview: string;
  };
  timestamp: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Email templates for each guide type
const emailTemplates = {
  selling: {
    subject: "Your Strategic Business Exit Guide - Panemorfi Holdings",
    template: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Panemorfi Holdings</h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Global Acquisition Excellence</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Your Strategic Business Exit Guide</h2>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in strategic business exits. As a business owner, you've built something valuable, 
            and we understand the importance of maximizing that value when the time comes to transition.
          </p>
          
          <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0;">📖 Your Guide Includes:</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px;">
              <li>Valuation optimization strategies</li>
              <li>Due diligence preparation checklist</li>
              <li>Negotiation tactics for maximum value</li>
              <li>Post-acquisition transition planning</li>
              <li>Tax optimization considerations</li>
            </ul>
          </div>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
            This comprehensive guide represents decades of acquisition experience and has helped business owners 
            achieve premium valuations in their exits.
          </p>
          
          <div style="text-align: center; margin: 40px 0;">
            <a href="#" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Download Your Guide
            </a>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 30px; margin-top: 40px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
              <strong>Ready to discuss your business exit strategy?</strong>
            </p>
            <p style="color: #64748b; font-size: 14px; line-height: 1.5;">
              Our team of acquisition experts is available for confidential consultations. 
              Contact us at <a href="mailto:info@panemorfi.com" style="color: #3b82f6;">info@panemorfi.com</a> 
              or schedule a call through our website.
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 30px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Panemorfi Holdings • Global Business Acquisitions<br>
            Delaware, USA • info@panemorfi.com
          </p>
        </div>
      </div>
    `
  },
  
  investing: {
    subject: "Global Investment Opportunities - Panemorfi Holdings",
    template: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #059669 0%, #7c3aed 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Panemorfi Holdings</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Investment Excellence Worldwide</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Global Investment Opportunities</h2>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in our investment opportunities. As a sophisticated investor, 
            you understand the value of strategic business acquisitions in building long-term wealth.
          </p>
          
          <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 30px 0;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0;">💼 Investment Highlights:</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px;">
              <li>Curated global acquisition opportunities</li>
              <li>Proven track record of value creation</li>
              <li>Diversified portfolio across industries</li>
              <li>Technology-driven scaling strategies</li>
              <li>Transparent reporting and communication</li>
            </ul>
          </div>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
            Our investment thesis focuses on cash-flow positive businesses with strong fundamentals 
            and exceptional scaling potential across global markets.
          </p>
          
          <div style="text-align: center; margin: 40px 0;">
            <a href="#" style="background: linear-gradient(135deg, #10b981 0%, #8b5cf6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Access Investment Guide
            </a>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 30px; margin-top: 40px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
              <strong>Interested in learning more about our investment opportunities?</strong>
            </p>
            <p style="color: #64748b; font-size: 14px; line-height: 1.5;">
              Schedule a confidential discussion with our investment team to explore partnership opportunities 
              that align with your investment objectives.
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 30px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Panemorfi Holdings • Global Investment Platform<br>
            Delaware, USA • info@panemorfi.com
          </p>
        </div>
      </div>
    `
  },
  
  partnership: {
    subject: "Strategic Partnership Framework - Panemorfi Holdings",
    template: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Panemorfi Holdings</h1>
          <p style="color: #f3e8ff; margin: 10px 0 0 0; font-size: 16px;">Strategic Partnership Excellence</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Strategic Partnership Framework</h2>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in strategic partnerships. We believe that the best business outcomes 
            are achieved through collaborative relationships with exceptional leaders like yourself.
          </p>
          
          <div style="background: #fdf4ff; border-left: 4px solid #a855f7; padding: 20px; margin: 30px 0;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0;">🤝 Partnership Models:</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px;">
              <li>Joint venture structures</li>
              <li>Strategic alliance frameworks</li>
              <li>Operational partnership models</li>
              <li>Technology integration partnerships</li>
              <li>Market expansion collaborations</li>
            </ul>
          </div>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
            Our partnership approach is designed to leverage complementary strengths, share risks and rewards, 
            and create sustainable competitive advantages in global markets.
          </p>
          
          <div style="text-align: center; margin: 40px 0;">
            <a href="#" style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Download Partnership Guide
            </a>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 30px; margin-top: 40px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
              <strong>Ready to explore partnership opportunities?</strong>
            </p>
            <p style="color: #64748b; font-size: 14px; line-height: 1.5;">
              Let's discuss how we can work together to achieve exceptional results. 
              Contact our partnership team to schedule a strategic consultation.
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 30px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Panemorfi Holdings • Strategic Partnerships<br>
            Delaware, USA • info@panemorfi.com
          </p>
        </div>
      </div>
    `
  },
  
  learning: {
    subject: "Complete Acquisition & Scaling Guide - Panemorfi Holdings",
    template: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #ea580c 0%, #7c3aed 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Panemorfi Holdings</h1>
          <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">Acquisition Education Excellence</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Complete Acquisition & Scaling Guide</h2>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in learning about business acquisitions. Whether you're new to acquisitions 
            or looking to refine your approach, this comprehensive guide will provide valuable insights.
          </p>
          
          <div style="background: #fff7ed; border-left: 4px solid #ea580c; padding: 20px; margin: 30px 0;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0;">📚 What You'll Learn:</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px;">
              <li>Target identification and screening</li>
              <li>Due diligence best practices</li>
              <li>Valuation methodologies</li>
              <li>Deal structuring and negotiation</li>
              <li>Post-acquisition integration</li>
              <li>Scaling strategies and value creation</li>
            </ul>
          </div>
          
          <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
            This guide represents our collective experience from dozens of successful acquisitions 
            and provides a systematic approach to building value through strategic acquisitions.
          </p>
          
          <div style="text-align: center; margin: 40px 0;">
            <a href="#" style="background: linear-gradient(135deg, #ea580c 0%, #8b5cf6 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Get Your Complete Guide
            </a>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 30px; margin-top: 40px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 15px;">
              <strong>Want to dive deeper into acquisition strategies?</strong>
            </p>
            <p style="color: #64748b; font-size: 14px; line-height: 1.5;">
              Our team offers educational consultations and can provide additional resources 
              to help you master the art and science of business acquisitions.
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 30px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Panemorfi Holdings • Acquisition Education<br>
            Delaware, USA • info@panemorfi.com
          </p>
        </div>
      </div>
    `
  }
};

// Email service configuration
export const sendAcquisitionGuide = async (request: EmailRequest): Promise<EmailResponse> => {
  try {
    // This would integrate with your chosen email service
    // Examples: SendGrid, Mailgun, AWS SES, Resend, etc.
    
    const template = emailTemplates[request.interest as keyof typeof emailTemplates];
    
    if (!template) {
      throw new Error('Invalid interest category');
    }

    // Example with SendGrid (you'll need to install @sendgrid/mail)
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: request.email,
      from: 'info@panemorfi.com',
      subject: template.subject,
      html: template.template,
      attachments: [
        {
          content: 'base64-encoded-pdf-content',
          filename: request.guide.filename,
          type: 'application/pdf',
          disposition: 'attachment'
        }
      ]
    };

    await sgMail.send(msg);
    */

    // For now, return success (you'll implement actual email sending)
    console.log('Email would be sent:', {
      to: request.email,
      subject: template.subject,
      guide: request.guide.filename
    });

    return {
      success: true,
      message: 'Guide sent successfully'
    };

  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Failed to send guide'
    };
  }
};

// Webhook handler for form submissions
export const handleGuideRequest = async (req: any, res: any) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const emailRequest: EmailRequest = req.body;
    const result = await sendAcquisitionGuide(emailRequest);
    
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};