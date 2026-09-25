/**
 * Send contact form submission email via Resend API
 */
export async function sendContactEmail(formData) {
  const apiKey = import.meta.env.RESEND_API_KEY;

  const emailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #040814; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; color: #e2e8f0;">
      <div style="background-color: #060c1b; padding: 24px; border-bottom: 1px solid #00e5ff33; text-align: center;">
        <h2 style="color: #00e5ff; margin: 0; font-size: 22px;">HELIONIX TECHNOLOGIES</h2>
        <p style="color: #94a3b8; font-size: 13px; margin-top: 4px;">New Enterprise Consultation Inquiry</p>
      </div>

      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600; width: 35%;">Full Name</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 700;">${formData.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Work Email</td>
            <td style="padding: 10px 0;"><a href="mailto:${formData.email}" style="color: #00e5ff; text-decoration: none; font-weight: 600;">${formData.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Company Name</td>
            <td style="padding: 10px 0; color: #ffffff;">${formData.company}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Phone Number</td>
            <td style="padding: 10px 0; color: #ffffff;">${formData.phone || 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Service Interest</td>
            <td style="padding: 10px 0; color: #00e5ff; font-weight: 600;">${formData.service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Target Budget</td>
            <td style="padding: 10px 0; color: #ffffff;">${formData.budget}</td>
          </tr>
          <tr style="border-bottom: 1px solid #1e293b;">
            <td style="padding: 10px 0; color: #94a3b8; font-weight: 600;">Expected Timeline</td>
            <td style="padding: 10px 0; color: #ffffff;">${formData.timeline}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0 6px 0; color: #94a3b8; font-weight: 600;" colspan="2">Project Objectives / Details</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 12px; background-color: #0b1329; border-radius: 8px; color: #cbd5e1; font-size: 13px; line-height: 1.6;">${formData.details || 'No additional details specified.'}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #02040a; padding: 16px; text-align: center; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b;">
        Automated alert from Helionix Technologies Web Portal &bull; helionixtechnologies@gmail.com
      </div>
    </div>
  `;

  const payload = {
    from: 'Helionix Technologies <onboarding@resend.dev>',
    to: ['helionixtechnologies@gmail.com'],
    subject: `New Enterprise Inquiry: ${formData.fullName} (${formData.company})`,
    html: emailHtml,
  };

  const isDev = import.meta.env.DEV;
  // In dev, use Vite proxy. In production, use Vercel Serverless Function.
  const endpoint = isDev ? '/api/resend/emails' : '/api/resend';

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && data && data.id) {
      return { success: true, data };
    } else {
      const errorMsg = data.message || data.name || (typeof data === 'string' ? data : 'Resend API rejected email delivery.');
      return { success: false, error: errorMsg };
    }
  } catch (error) {
    return { success: false, error: error.message || 'Network error while attempting to send email.' };
  }
}
