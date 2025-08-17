# EmailJS Setup Guide

Your contact form is now ready to send emails! Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## 3. Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Ram,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Copy the Template ID** (you'll need this)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**
3. Copy it (you'll need this)

## 5. Update Environment Variables
1. Open `.env.local` file in your project
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email inbox for the message!

## Features Added:
✅ **Real email delivery** - Messages sent to your email
✅ **Loading states** - Shows "Sending..." while processing
✅ **Success feedback** - Green checkmark when sent
✅ **Error handling** - Red error message if failed
✅ **Form validation** - Required fields enforced
✅ **Professional styling** - Matches your portfolio design

## Free Tier Limits:
- **200 emails/month** (perfect for portfolio contact forms)
- **No credit card required**
- **Reliable delivery**

That's it! Your contact form will now send real emails to your inbox. 🎉