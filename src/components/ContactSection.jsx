import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import toast from 'react-hot-toast';
import { Send, Mail, MapPin, CheckCircle, ShieldCheck, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { globalOffices } from '../data/siteData';
import { sendContactEmail } from '../services/emailService';

// Joi Schema Validation (No HTML browser validations)
const contactSchema = Joi.object({
  service: Joi.string().required(),
  fullName: Joi.string().trim().min(2).required().messages({
    'string.empty': 'Full Name is required',
    'string.min': 'Full Name must be at least 2 characters',
    'any.required': 'Full Name is required',
  }),
  email: Joi.string().trim().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Work Email is required',
    'string.email': 'Please enter a valid work email address',
    'any.required': 'Work Email is required',
  }),
  company: Joi.string().trim().min(2).required().messages({
    'string.empty': 'Company Name is required',
    'string.min': 'Company Name must be at least 2 characters',
    'any.required': 'Company Name is required',
  }),
  phone: Joi.string().allow('', null).optional(),
  budget: Joi.string().required(),
  timeline: Joi.string().required(),
  details: Joi.string().allow('', null).optional(),
});

export default function ContactSection({ isOpenModal = false, onCloseModal = null }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: joiResolver(contactSchema),
    defaultValues: {
      service: 'ai-automation',
      fullName: '',
      email: '',
      company: '',
      phone: '',
      budget: '$50k - $100k',
      timeline: '1 - 3 Months',
      details: ''
    }
  });

  const selectedService = watch('service');

  const onSubmit = async (data) => {
    setIsSending(true);
    const toastId = toast.loading('Sending consultation inquiry...');
    try {
      const res = await sendContactEmail(data);
      if (res.success) {
        toast.success(`Request Received & Email Sent Successfully!`, { id: toastId, duration: 5000 });
        setSubmittedData(data);
        setFormSubmitted(true);
        reset();
      } else {
        const errorMsg = typeof res.error === 'string' ? res.error : (res.error?.message || 'Failed to send email inquiry');
        toast.error(`Email Error: ${errorMsg}`, { id: toastId, duration: 7000 });
      }
    } catch (err) {
      toast.error(`Failed to submit: ${err.message || 'Network error'}`, { id: toastId, duration: 7000 });
    } finally {
      setIsSending(false);
    }
  };

  const formContent = (
    <div className="space-y-6">
      
      {formSubmitted ? (
        <div className="glass-card rounded-2xl p-10 border border-cyan-500/50 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center mx-auto text-cyan-400">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Thank you, <span className="text-cyan-400 font-semibold">{submittedData?.fullName || 'Partner'}</span>. An Enterprise Solutions Architect from Helionix Technologies will review your requirements and reach out within 4 business hours.
          </p>
          <button
            onClick={() => {
              setFormSubmitted(false);
              if (onCloseModal) onCloseModal();
            }}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Service Selector Pills */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Primary Area of Interest *
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'ai-automation', label: 'Agentic AI & GenAI' },
                { id: 'cloud-engineering', label: 'Cloud & Platform Modernization' },
                { id: 'data-analytics', label: 'Data Lakehouse & Governance' },
                { id: 'digital-experience', label: 'UI/UX & Digital Commerce' },
                { id: 'advisory', label: 'Enterprise Technology Advisory' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setValue('service', item.id, { shouldValidate: true })}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                    selectedService === item.id
                      ? 'bg-cyan-500 text-navy-950 border-cyan-400'
                      : 'bg-navy-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Input Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName')}
                placeholder="e.g. Alex Vance"
                className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                }`}
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.fullName.message}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <input
                type="text"
                {...register('email')}
                placeholder="alex@enterprise.com"
                className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                {...register('company')}
                placeholder="Global Corp Inc."
                className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.company ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                }`}
              />
              {errors.company && (
                <p className="text-red-400 text-xs font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.company.message}</span>
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                {...register('phone')}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Budget & Timeline Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Target Budget Range
              </label>
              <select
                {...register('budget')}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option>$25k - $50k</option>
                <option>$50k - $100k</option>
                <option>$100k - $250k</option>
                <option>$250k+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Expected Timeline
              </label>
              <select
                {...register('timeline')}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option>Immediate (&lt; 1 Month)</option>
                <option>1 - 3 Months</option>
                <option>3 - 6 Months</option>
                <option>Strategic Roadmap (6+ Months)</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Project Description / Objectives
            </label>
            <textarea
              rows={4}
              {...register('details')}
              placeholder="Briefly share your current technology stack, challenge, or project goals..."
              className="w-full bg-navy-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 rounded-xl bg-cyan-500 text-navy-950 font-bold text-sm hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 text-navy-950 animate-spin" />
                <span>Sending Consultation Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-navy-950" />
                <span>Request Enterprise Architect Consultation</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Strict NDA Guaranteed. Your data will never be shared.</span>
          </div>

        </form>
      )}

    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
        <div className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-navy-950 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Schedule Enterprise Consultation</span>
            </h3>
            <button
              onClick={onCloseModal}
              className="text-slate-400 hover:text-white font-bold p-1"
            >
              ✕
            </button>
          </div>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span>Direct Access</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let's Build Your Next Digital Advantage
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Connect directly with our senior technology directors and solution architects to discuss your digital transformation initiatives.
              </p>
            </div>

            {/* Direct Contact Handles */}
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-4 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-900 border border-slate-700 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Enterprise Inquiries</div>
                  <div className="text-sm font-bold text-white">helionixtechnologies@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Global Offices List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Global Office Locations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {globalOffices.map((office, idx) => (
                  <div key={idx} className="bg-navy-900/60 p-3 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{office.city}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight">{office.address}</div>
                    <div className="text-[10px] text-cyan-400 font-medium">{office.country}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Consultation Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl bg-navy-950">
              <div className="mb-6 pb-4 border-b border-slate-800 space-y-1">
                <h3 className="text-xl font-bold text-white">Schedule Technical Discovery Call</h3>
                <p className="text-xs text-slate-400">Fill in your requirements below for a tailored response within 4 hours.</p>
              </div>
              {formContent}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
