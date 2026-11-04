"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_METADATA } from "@/data/content";
import { LinkedInIcon } from "@/components/ui/Icons";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please provide your full name (at least 2 characters)."),
  email: z.string().email("Please enter a valid email address."),
  category: z.string().min(1, "Please choose an inquiry topic."),
  message: z.string().min(10, "Please provide a message with at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [mailtoLink, setMailtoLink] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "Admissions & Academic Mentorship",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const recipient = SITE_METADATA.socials.email;
      const subject = `[Portfolio Inquiry] ${data.category} - ${data.name}`;
      const body = `Dear Deetya,\n\nYou have received a new inquiry from your personal portfolio:\n\nFull Name: ${data.name}\nEmail Address: ${data.email}\nInquiry Topic: ${data.category}\n\nMessage:\n${data.message}\n\n---\nSent via Deetya Behl Portfolio Website (${new Date().toLocaleDateString()})`;

      const generatedMailto = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setMailtoLink(generatedMailto);

      // Trigger celebratory confetti burst
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#C96570", "#B85D3E", "#556B59", "#C28E3A"],
      });

      // Background logging to local route handler
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Background log notification:", e));

      setSubmitStatus("success");

      // Open user's email client directly with all details filled
      window.location.href = generatedMailto;
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="09"
          pill="Get In Touch"
          title="Dialogue & Collaboration"
          subtitle="Open for university admissions dialogue, cognitive neuroscience research collaborations, and Project Nazariya institutional partnerships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct channels & credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 shadow-card space-y-6">
              <h3 className="text-2xl font-serif font-medium text-ink-900 dark:text-white">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={SITE_METADATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2D2D38] hover:border-accent-rose/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent-rose/10 text-accent-rose">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-ink-muted dark:text-zinc-400">LinkedIn Profile</div>
                      <div className="text-sm font-medium text-ink-900 dark:text-white">
                        linkedin.com/in/deetyabehl
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent-rose group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${SITE_METADATA.socials.email}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2D2D38] hover:border-accent-terracotta/50 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-accent-terracotta/10 text-accent-terracotta">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-mono text-ink-muted dark:text-zinc-400">Email Inquiry</div>
                    <div className="text-sm font-medium text-ink-900 dark:text-white truncate">
                      {SITE_METADATA.socials.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2D2D38]">
                  <div className="p-2.5 rounded-xl bg-accent-sage/10 text-accent-sage">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-ink-muted dark:text-zinc-400">Academic Institution</div>
                    <div className="text-sm font-medium text-ink-900 dark:text-white">
                      {SITE_METADATA.socials.school}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE3D4] dark:border-[#2A2A33] text-xs text-ink-muted dark:text-zinc-300 leading-relaxed">
                Admissions officers and mentors are invited to request full copies of research manuscripts,
                Stroop experimental data, or PRASHAST implementation guidebooks.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-10 shadow-card">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-accent-rose block mb-1">
                  Send Direct Inquiry
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-900 dark:text-white">
                  Send a Message to Deetya
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-800 dark:text-zinc-200 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Dr. Eleanor Vance"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#202028] border text-sm text-ink-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-hidden transition-colors ${
                      errors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E2DBCB] dark:border-[#33333E] focus:border-accent-rose"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-800 dark:text-zinc-200 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="name@institution.edu"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#202028] border text-sm text-ink-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-hidden transition-colors ${
                      errors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E2DBCB] dark:border-[#33333E] focus:border-accent-rose"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>

                {/* Inquiry Category */}
                <div>
                  <label
                    htmlFor="contact-category"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-800 dark:text-zinc-200 mb-1.5"
                  >
                    Topic of Discussion *
                  </label>
                  <select
                    id="contact-category"
                    {...register("category")}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#33333E] text-sm text-ink-900 dark:text-white focus:outline-hidden focus:border-accent-rose transition-colors"
                  >
                    <option value="Admissions & Academic Mentorship">
                      University Admissions & Mentorship
                    </option>
                    <option value="Research & Clinical Collaboration">
                      Psychology / Neuroscience Research Collaboration
                    </option>
                    <option value="Project Nazariya Partnership">
                      Project Nazariya Public Space Deployment
                    </option>
                    <option value="FlickerScope Technology Inquiry">
                      FlickerScope Device & School Lighting Rules
                    </option>
                    <option value="Classical Dance Outreach">
                      Classical Dance & Mental Health Outreach
                    </option>
                    <option value="General Message">Other General Inquiry</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-800 dark:text-zinc-200 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Write your note or question here..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-[#202028] border text-sm text-ink-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-hidden transition-colors resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E2DBCB] dark:border-[#33333E] focus:border-accent-rose"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.message.message}</p>
                  )}
                </div>

                {/* Feedback notifications */}
                {submitStatus === "success" && (
                  <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 space-y-3">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-900 dark:text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>Message formatted successfully! Opening your email client to send to Deetya...</span>
                    </div>
                    {mailtoLink && (
                      <div>
                        <a
                          href={mailtoLink}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 dark:bg-emerald-600 text-white text-xs font-mono hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Click here if your email app did not open automatically</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-700 text-xs text-red-700 dark:text-red-200">
                    Unable to format message. Please email directly to {SITE_METADATA.socials.email}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900 text-xs sm:text-sm font-medium tracking-wide shadow-card hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Opening Email..." : "Send via Email"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
