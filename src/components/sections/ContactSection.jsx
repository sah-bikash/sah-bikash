import { useState, useCallback, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import GlassCard from '@/components/common/GlassCard';
import Button from '@/components/common/Button';
import SocialIcon from '@/components/common/SocialIcon';
import { AnimatedStagger, AnimatedChild } from '@/components/common/AnimatedContainer';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/personal';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────
   Static data — lives in this file
───────────────────────────────────────── */
const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    description: 'Drop me an email anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    description: 'Call during business hours',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: PERSONAL_INFO.whatsapp,
    href: `https://wa.me/${PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
    description: 'Quick chat on WhatsApp',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: null,
    description: 'Based in Nepal',
  },
];

/* ─────────────────────────────────────────
   Sub-components (forwardRef for react-hook-form)
───────────────────────────────────────── */
const FormInput = forwardRef(function FormInput(
  { label, id, error, className, ...props },
  ref
) {
  return (
    <div className={cn('space-y-2', className)}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/80"
      >
        {label}
      </label>

      <input
        ref={ref}
        id={id}
        className={cn(
          'w-full px-4 py-3 rounded-xl text-base',
          'bg-white/[0.04] text-white placeholder:text-white/30',
          'border outline-none transition-all duration-300',
          error
            ? 'border-red-400/40 focus:ring-2 focus:ring-red-400/20'
            : 'border-white/[0.08] hover:border-white/[0.15] focus:ring-2 focus:ring-white/20 focus:border-white/25'
        )}
        {...props}
      />

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle size={12} />
          {error.message}
        </p>
      )}
    </div>
  );
});

const FormTextarea = forwardRef(function FormTextarea(
  { label, id, error, ...props },
  ref
) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/80"
      >
        {label}
      </label>

      <textarea
        ref={ref}
        id={id}
        rows={5}
        className={cn(
          'w-full px-4 py-3 rounded-xl text-base resize-none',
          'bg-white/[0.04] text-white placeholder:text-white/30',
          'border outline-none transition-all duration-300',
          error
            ? 'border-red-400/40 focus:ring-2 focus:ring-red-400/20'
            : 'border-white/[0.08] hover:border-white/[0.15] focus:ring-2 focus:ring-white/20 focus:border-white/25'
        )}
        {...props}
      />

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle size={12} />
          {error.message}
        </p>
      )}
    </div>
  );
});

/* ─────────────────────────────────────────
   Contact method card
───────────────────────────────────────── */
function ContactMethodCard({ method }) {
  const Inner = (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <div
        className={cn(
          'w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0',
          'bg-white/[0.05] border border-white/[0.08]',
          'transition-colors duration-300',
          method.href && 'group-hover:bg-white/[0.1]'
        )}
      >
        <method.icon size={18} className={cn('text-muted', method.href && 'group-hover:text-white transition-colors')} />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-muted mb-0.5">{method.description}</p>
        <p className={cn('text-sm font-medium text-white/80', method.href && 'group-hover:text-white transition-colors')}>
          {method.value}
        </p>
      </div>
    </div>
  );

  /* Clickable or static */
  if (method.href) {
    const isExternal = method.href.startsWith('http');
    return (
      <GlassCard className="p-5 group">
        <a
          href={method.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          aria-label={method.label}
        >
          {Inner}
        </a>
      </GlassCard>
    );
  }

  return <GlassCard className="p-5" hover={false}>{Inner}</GlassCard>;
}

/* ─────────────────────────────────────────
   Success state
───────────────────────────────────────── */
function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
        <CheckCircle size={30} className="text-emerald-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
      <p className="text-base text-muted max-w-xs leading-relaxed">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Contact form
───────────────────────────────────────── */
function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' });

 const [errorMessage, setErrorMessage] = useState('');

const onSubmit = useCallback(
  async (data) => {
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMessage(
        err?.text ||
        'Something went wrong. Please try again or email me directly at sahxbikash@gmail.com'
      );
    }
  },
  [reset]
);

  if (isSubmitted) return <SuccessMessage />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      {/* Row: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <FormInput
          label="Name"
          id="name"
          placeholder="Your name"
          autoComplete="name"
          error={errors.name}
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'At least 2 characters' },
          })}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          placeholder="you@email.com"
          autoComplete="email"
          error={errors.email}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Enter a valid email address',
            },
          })}
        />
      </div>

      {/* Subject */}
      <FormInput
        label="Subject"
        id="subject"
        placeholder="What's this about?"
        error={errors.subject}
        {...register('subject', {
          required: 'Subject is required',
          minLength: { value: 3, message: 'At least 3 characters' },
        })}
      />

      {/* Message */}
      <FormTextarea
        label="Message"
        id="message"
        placeholder="Tell me about your project, idea, or just say hello…"
        error={errors.message}
        {...register('message', {
          required: 'Message is required',
          minLength: { value: 10, message: 'At least 10 characters' },
        })}
      />

      {/* Error message */}
      {errorMessage && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
        <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
        <span>{errorMessage}</span>
      </div>
      )}


      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
        aria-label="Send message"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send size={17} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative" aria-label="Contact">
      <div className="section-container">

        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* ── Left column: contact methods + socials ── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Contact method cards */}
            <AnimatedStagger className="space-y-4">
              {CONTACT_METHODS.map((method) => (
                <AnimatedChild key={method.label}>
                  <ContactMethodCard method={method} />
                </AnimatedChild>
              ))}
            </AnimatedStagger>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-medium text-muted mb-4">Find me online</p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon
                    key={social.name}
                    icon={social.icon}
                    url={social.url}
                    label={social.name}
                    size="md"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right column: form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <ContactForm />
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}