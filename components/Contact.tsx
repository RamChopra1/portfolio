"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/site";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Set' : 'Missing' });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Ram Chopra', // Your name
      };

      console.log('Sending email with params:', templateParams);
      
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS success:', result);
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('EmailJS error details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h3 className="mb-4 text-xl font-semibold text-zinc-100">Let's Get In Touch!</h3>
          <p className="text-zinc-400">
            Ready to bring your ideas to life? Let's discuss your project and see how we can work together.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-zinc-300 group hover:text-emerald-400 transition-colors duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:scale-110 transition-all duration-200">
              <Phone size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-zinc-400 font-medium mb-1">Contact No</div>
              <div className="font-medium">{contact.phone}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-300 group hover:text-emerald-400 transition-colors duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:scale-110 transition-all duration-200">
              <Mail size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-zinc-400 font-medium mb-1">Email</div>
              <div className="font-medium">{contact.email}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-300 group hover:text-emerald-400 transition-colors duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:scale-110 transition-all duration-200">
              <MapPin size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-sm text-zinc-400 font-medium mb-1">Address</div>
              <div className="font-medium">{contact.address}</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-[#111111] border-[#1f1f1f] p-8 hover:border-[#2a2a2a] transition-colors duration-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#1f1f1f] bg-zinc-800/30 px-4 py-4 text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-[#2a2a2a]"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#1f1f1f] bg-zinc-800/30 px-4 py-4 text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-[#2a2a2a]"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#1f1f1f] bg-zinc-800/30 px-4 py-4 text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 hover:border-[#2a2a2a]"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#1f1f1f] bg-zinc-800/30 px-4 py-4 text-zinc-100 placeholder-zinc-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 resize-none transition-all duration-200 hover:border-[#2a2a2a]"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-emerald-400 text-black hover:bg-emerald-500 font-medium transition-all duration-200 hover:scale-[1.02] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle size={16} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                <AlertCircle size={16} />
                Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </Card>
      </motion.div>
    </div>
  );
}