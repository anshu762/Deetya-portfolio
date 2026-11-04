"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  ChevronDown,
  Check,
  GraduationCap,
  Brain,
  Building2,
  Zap,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_METADATA } from "@/data/content";
import { LinkedInIcon } from "@/components/ui/Icons";

const TOPIC_OPTIONS = [
  {
    value: "Admissions & Academic Mentorship",
    label: "University Admissions & Mentorship",
    detail: "Academic inquiry, mentor dialogue & recommendations",
    icon: GraduationCap,
  },
  {
    value: "Research & Clinical Collaboration",
    label: "Psychology & Neuroscience Research",
    detail: "ADHD Triad findings, Stroop study data & co-authorship",
    icon: Brain,
  },
  {
    value: "Project Nazariya Partnership",
    label: "Project Nazariya Public Spaces",
    detail: "Police station, school & workplace accessibility tooling",
    icon: Building2,
  },
  {
    value: "FlickerScope Technology Inquiry",
    label: "FlickerScope Hardware & Lighting Policy",
    detail: "$11 wearable specs, PWM flicker & school guidelines",
    icon: Zap,
  },
  {
    value: "Classical Dance Outreach",
    label: "Classical Dance & Mental Health Outreach",
    detail: "Kathak & Bharatanatyam performances & workshops",
    icon: Sparkles,
  },
  {
    value: "General Message",
    label: "General Inquiry / Greetings",
    detail: "Press, speaking opportunities & informal discussion",
    icon: MessageSquare,
  },
];

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: TOPIC_OPTIONS[0].value,
      message: "",
    },
  });

  const selectedCategory = watch("category");
  const selectedOption =
    TOPIC_OPTIONS.find((t) => t.value === selectedCategory) || TOPIC_OPTIONS[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

                {/* Bespoke Editorial Custom Select for Topic of Discussion */}
                <div ref={dropdownRef} className="relative">
                  <label
                    id="topic-label"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-800 dark:text-zinc-200 mb-1.5"
                  >
                    Topic of Discussion *
                  </label>

                  {/* Hidden field for react-hook-form */}
                  <input type="hidden" {...register("category")} />

                  {/* Custom Trigger Button */}
                  <button
                    type="button"
                    aria-labelledby="topic-label"
                    aria-haspopup="listbox"
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#33333E] text-left flex items-center justify-between transition-all hover:border-accent-rose focus:border-accent-rose focus:outline-hidden group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="p-1.5 rounded-lg bg-[#FAF4EE] dark:bg-[#2A2A36] text-accent-rose shrink-0">
                        <selectedOption.icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="font-medium text-ink-900 dark:text-white text-sm truncate">
                          {selectedOption.label}
                        </div>
                        <div className="text-[11px] font-mono text-ink-muted dark:text-zinc-400 truncate">
                          {selectedOption.detail}
                        </div>
                      </div>
                    </div>

                    <div className="pl-2 shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 text-ink-muted dark:text-zinc-400 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-accent-rose" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Custom Dropdown Popover */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.99 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        role="listbox"
                        className="absolute top-full left-0 right-0 mt-2 z-30 p-2 rounded-2xl bg-white dark:bg-[#1C1C24] border border-[#E2DBCB] dark:border-[#383848] shadow-floating max-h-[340px] overflow-y-auto space-y-1"
                      >
                        {TOPIC_OPTIONS.map((opt) => {
                          const isSelected = opt.value === selectedCategory;
                          const IconComp = opt.icon;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setValue("category", opt.value, { shouldValidate: true });
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-colors ${
                                isSelected
                                  ? "bg-[#FBF3EE] dark:bg-[#2A2428] text-ink-900 dark:text-white"
                                  : "hover:bg-[#F8F5EE] dark:hover:bg-[#252530] text-ink-800 dark:text-zinc-200"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`p-2 rounded-lg shrink-0 ${
                                    isSelected
                                      ? "bg-accent-rose text-white"
                                      : "bg-[#F4EFE5] dark:bg-[#2A2A34] text-ink-muted dark:text-zinc-400"
                                  }`}
                                >
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium leading-snug">
                                    {opt.label}
                                  </div>
                                  <div className="text-[11px] font-mono text-ink-muted dark:text-zinc-400">
                                    {opt.detail}
                                  </div>
                                </div>
                              </div>

                              {isSelected && (
                                <div className="p-1 rounded-full text-accent-rose shrink-0">
                                  <Check className="w-4 h-4" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
