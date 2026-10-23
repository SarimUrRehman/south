import React, { useState } from 'react';
import {
  Phone,
  PhoneCall,
  Menu,
  X,
  Paintbrush,
  Building2,
  Home,
  Trash2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  FileCheck2,
  Send,
  MapPin,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { WaveDivider } from './components/WaveDivider';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

const SERVICES_LIST = [
  {
    id: 'residential-painting',
    title: 'Residential Painting',
    description: 'Interior and exterior painting that refreshes your home.',
    icon: Home,
    badge: 'Interior & Exterior',
  },
  {
    id: 'commercial-painting',
    title: 'Commercial Painting',
    description: 'Professional, on-schedule painting for offices, shops, and businesses.',
    icon: Building2,
    badge: 'Commercial Grade',
  },
  {
    id: 'trash-outs',
    title: 'Trash Outs',
    description: 'Fast, thorough cleanouts for homes, rentals, and properties.',
    icon: Trash2,
    badge: 'Rapid Turnaround',
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    description: 'Restore siding, driveways, decks, and walkways.',
    icon: Sparkles,
    badge: 'Surface Restoration',
  },
];

const WHY_CHOOSE_US = [
  {
    title: 'Licensed & Insured',
    description: 'Full liability coverage for complete peace of mind on every job site.',
    icon: ShieldCheck,
  },
  {
    title: 'Reliable & On Time',
    description: 'Dependable scheduling and prompt project milestones you can plan around.',
    icon: Clock,
  },
  {
    title: 'Quality Workmanship',
    description: 'Premium coatings, thorough prep work, and meticulous attention to detail.',
    icon: Award,
  },
  {
    title: 'Free Estimates',
    description: 'Upfront, transparent pricing tailored to your property with zero obligations.',
    icon: FileCheck2,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Painting',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumberDisplay = '+1 (850) 418-8195';
  const phoneTel = 'tel:+18504188195';

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) {
      newErrors.service = 'Please choose a service';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable front-end validation & submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1B2430] flex flex-col font-sans">
      {/* ========================================================
          SECTION 1: STICKY HEADER (White)
          - Logo on the left
          - Nav links (Services, About, Contact) on right
          - Navy "Call Now" button showing phone number
          - Mobile hamburger menu + persistent call button
      ======================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441] rounded-md transition-opacity hover:opacity-95"
              aria-label="Southern Shore Painting Home"
            >
              <Logo variant="light" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
              <a
                href="#services"
                className="text-[15px] font-medium text-[#1B2430] hover:text-[#1F3A5F] transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[15px] font-medium text-[#1B2430] hover:text-[#1F3A5F] transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[15px] font-medium text-[#1B2430] hover:text-[#1F3A5F] transition-colors py-2"
              >
                Contact
              </a>
            </nav>

            {/* Header Right Action: Phone Button + Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Navy Call Now Button (Visible on both desktop & mobile) */}
              <a
                href={phoneTel}
                className="inline-flex items-center gap-2 bg-[#1F3A5F] hover:bg-[#14263F] text-white px-3.5 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441]"
                aria-label={`Call Southern Shore Painting at ${phoneNumberDisplay}`}
              >
                <Phone className="w-4 h-4 text-[#D9A441] fill-[#D9A441]/20 flex-shrink-0" />
                <span className="hidden sm:inline">Call Now:</span>
                <span className="tabular-nums font-bold">{phoneNumberDisplay}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#1F3A5F] hover:bg-[#F3F6FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1B2430] hover:text-[#1F3A5F] hover:bg-[#F3F6FA] px-3 py-2 rounded-md transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1B2430] hover:text-[#1F3A5F] hover:bg-[#F3F6FA] px-3 py-2 rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1B2430] hover:text-[#1F3A5F] hover:bg-[#F3F6FA] px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </a>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#6B8CAE]">
                <span>Serving the Florida Panhandle</span>
                <span className="font-semibold text-[#1F3A5F]">Licensed &amp; Insured</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ========================================================
          SECTION 2: HERO
          - Navy background with subtle gradient & coastal architectural pattern
          - Headline: "Quality Painting Across the Panhandle."
          - Subheadline: "Residential and commercial painting, trash outs, and pressure washing. Licensed & insured, with reliable, quality work you can count on."
          - "Licensed & Insured" badge
          - Two buttons: Solid gold call button & outlined white quote button
          - Wave divider at the bottom
      ======================================================== */}
      <section
        id="hero"
        className="relative bg-gradient-to-b from-[#1F3A5F] via-[#1A3252] to-[#14263F] text-white pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden"
      >
        {/* Subtle decorative architectural/coastal texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#D9A441_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Ambient subtle coastal glow */}
        <div
          className="absolute -top-32 right-1/4 w-96 h-96 bg-[#6B8CAE]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-10 w-72 h-72 bg-[#D9A441]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F3F6FA] text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
            <span>Licensed &amp; Insured</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></span>
            <span className="text-[#6B8CAE]">Florida Panhandle</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Quality Painting Across the{' '}
            <span
              className="text-[#D9A441] italic font-script font-normal text-5xl sm:text-6xl md:text-7xl align-baseline inline-block px-1"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Panhandle.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-[#F3F6FA]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Residential and commercial painting, trash outs, and pressure washing. Licensed &amp;
            insured, with reliable, quality work you can count on.
          </p>

          {/* Tagline pill */}
          <p className="mt-3 text-sm text-[#6B8CAE] font-medium tracking-wide">
            "Serving the panhandle with reliable, quality work."
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary Solid Gold Button (warm sandy gold #D9A441) */}
            <a
              href={phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D9A441] hover:bg-[#C49234] text-[#14263F] font-bold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-5 h-5 text-[#14263F] fill-[#14263F]" />
              <span>Call {phoneNumberDisplay}</span>
            </a>

            {/* Outlined White Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded-lg border-2 border-white/80 hover:border-white transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441]"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#D9A441]" />
            </a>
          </div>

          {/* Quick proof badges */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D9A441]" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D9A441]" />
              <span>Prompt Response</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D9A441]" />
              <span>Reliable &amp; On Time</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D9A441]" />
              <span>Complete Clean-Up</span>
            </div>
          </div>
        </div>

        {/* Wave divider at bottom transitioning smoothly to Section 3 background (#F3F6FA) */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fillColor="#F3F6FA" />
        </div>
      </section>

      {/* ========================================================
          SECTION 3: SERVICES + ABOUT
          - Very light blue-gray background (#F3F6FA)
          - 4 attractive cards with line icons, title, and short description:
            1. Residential Painting: interior and exterior painting that refreshes your home
            2. Commercial Painting: professional, on-schedule painting for offices, shops, and businesses
            3. Trash Outs: fast, thorough cleanouts for homes, rentals, and properties
            4. Pressure Washing: restore siding, driveways, decks, and walkways
          - Under the cards: "Why Choose Us" strip with 4 check-icon points:
            Licensed & Insured, Reliable & On Time, Quality Workmanship, Free Estimates.
      ======================================================== */}
      <section id="services" className="bg-[#F3F6FA] pt-14 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B8CAE] block mb-2">
              Expert Craftsmanship
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#1F3A5F]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Our Professional Services
            </h2>
            <div className="w-16 h-1 bg-[#D9A441] mx-auto mt-4 mb-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-[#1B2430]/80">
              Complete painting and surface restoration solutions tailored for coastal Florida
              homes, rental properties, and commercial facilities.
            </p>
          </div>

          {/* 4 Attractive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-7 shadow-xs hover:shadow-md border border-slate-200/70 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-xl bg-[#F3F6FA] border border-[#6B8CAE]/20 flex items-center justify-center text-[#1F3A5F] group-hover:bg-[#1F3A5F] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#6B8CAE] bg-[#F3F6FA] px-2.5 py-1 rounded-full border border-slate-200/60">
                        {service.badge}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3
                      className="text-xl font-serif-heading font-bold text-[#1F3A5F] mb-3 group-hover:text-[#1F3A5F]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-sm text-[#1B2430]/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleServiceSelect(service.title)}
                      className="text-xs font-semibold text-[#1F3A5F] group-hover:text-[#D9A441] inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={phoneTel}
                      className="text-xs text-[#6B8CAE] hover:text-[#1F3A5F] p-1"
                      title={`Call for ${service.title}`}
                      aria-label={`Call for ${service.title}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Under the cards: Short "Why Choose Us" strip */}
          <div id="about" className="mt-16 md:mt-24 scroll-mt-24">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1F3A5F] via-[#6B8CAE] to-[#D9A441]" />

              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B8CAE] block mb-1">
                  The Southern Shore Difference
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1F3A5F]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Why Choose Southern Shore Painting
                </h3>
                <p className="text-sm sm:text-base text-[#1B2430]/75 mt-2">
                  Locally owned and committed to dependable excellence across every neighborhood in the panhandle.
                </p>
              </div>

              {/* 4 Check-Icon Points: Licensed & Insured, Reliable & On Time, Quality Workmanship, Free Estimates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {WHY_CHOOSE_US.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="flex flex-col items-start p-4 rounded-xl bg-[#F3F6FA]/70 border border-slate-200/50 hover:bg-[#F3F6FA] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#1F3A5F] text-[#D9A441] flex items-center justify-center flex-shrink-0 shadow-2xs">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-[#1F3A5F]">{point.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1B2430]/80 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider transitioning to Section 4 background (white) */}
      <div className="bg-[#F3F6FA]">
        <WaveDivider fillColor="#FFFFFF" />
      </div>

      {/* ========================================================
          SECTION 4: CONTACT + FOOTER
          - "Let's Get Your Project Started" section
          - Large clickable phone number: +1 (850) 418-8195
          - "Serving the Florida Panhandle"
          - Simple contact form:
            Name, Phone, Email, Service dropdown, Message, "Request Free Quote" button
            Front-end validation & success message on submit
          - Slim dark navy footer (#14263F):
            Logo, business name, "Licensed & Insured", phone, copyright
            NO street address anywhere!
      ======================================================== */}
      <section id="contact" className="bg-white py-14 sm:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Info & Phone Callout */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B8CAE] block mb-2">
                  Get in Touch
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#1F3A5F] leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Let's Get Your Project Started
                </h2>
                <div className="w-16 h-1 bg-[#D9A441] my-4 rounded-full"></div>
                <p className="text-base text-[#1B2430]/80 leading-relaxed mb-8">
                  Whether you need a full home exterior paint job, commercial refresh, property cleanout, or high-powered pressure washing, we are ready to assist.
                </p>

                {/* Service Area Callout */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F3F6FA] border border-slate-200/80 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#1F3A5F] text-[#D9A441] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F3A5F]">Service Area</h4>
                    <p className="text-sm font-medium text-[#1B2430]">
                      Serving the Florida Panhandle
                    </p>
                    <p className="text-xs text-[#6B8CAE] mt-0.5">
                      Fast, local scheduling for coastal and inland properties
                    </p>
                  </div>
                </div>

                {/* Large Clickable Phone Number */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1F3A5F] to-[#14263F] text-white shadow-md relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-xs uppercase font-semibold tracking-wider text-[#D9A441] mb-1">
                      Direct Line &bull; Immediate Assistance
                    </p>
                    <a
                      href={phoneTel}
                      className="block text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#D9A441] transition-colors py-1 focus:outline-none focus-visible:underline"
                    >
                      {phoneNumberDisplay}
                    </a>
                    <p className="text-xs text-slate-300 mt-2 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-[#D9A441]" />
                      Tap to call directly from your device
                    </p>
                  </div>

                  {/* Decorative background circle */}
                  <div
                    className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-500"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Trust reminder */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-[#6B8CAE]">
                <ShieldCheck className="w-5 h-5 text-[#1F3A5F] flex-shrink-0" />
                <span>
                  Licensed &amp; Insured contractors. All quotes are free and carry no obligation.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F3F6FA] border border-slate-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs relative">
                {isSubmitted ? (
                  /* Success Confirmation State */
                  <div className="text-center py-10 px-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#1F3A5F] text-[#D9A441] flex items-center justify-center mx-auto mb-5 shadow-sm">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1F3A5F] mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-base text-[#1B2430]/80 max-w-md mx-auto mb-6">
                      Your quote request for{' '}
                      <span className="font-semibold text-[#1F3A5F]">{formData.service}</span> has been received. Our team will review your details and contact you at{' '}
                      <span className="font-semibold text-[#1F3A5F]">{formData.phone}</span> shortly.
                    </p>

                    <div className="bg-white rounded-xl p-4 max-w-sm mx-auto text-left border border-slate-200 text-xs space-y-1 mb-6 text-slate-600">
                      <div>
                        <span className="font-semibold text-slate-800">Email:</span> {formData.email}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">Service:</span> {formData.service}
                      </div>
                      {formData.message && (
                        <div>
                          <span className="font-semibold text-slate-800">Notes:</span> {formData.message}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={phoneTel}
                        className="inline-flex items-center justify-center gap-2 bg-[#1F3A5F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#14263F] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#D9A441]" />
                        <span>Call Us Directly</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            service: 'Residential Painting',
                            message: '',
                          });
                        }}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-[#1B2430] bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-6">
                      <h3
                        className="text-2xl font-serif-heading font-bold text-[#1F3A5F]"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        Request a Free Quote
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1B2430]/70 mt-1">
                        Fill out the form below and we will get back to you promptly with an estimate.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold text-[#1F3A5F] uppercase tracking-wider mb-1.5"
                        >
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                            errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                          } text-sm text-[#1B2430] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-600 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone Field */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold text-[#1F3A5F] uppercase tracking-wider mb-1.5"
                          >
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. (850) 555-0199"
                            className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                              errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                            } text-sm text-[#1B2430] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-colors`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-[#1F3A5F] uppercase tracking-wider mb-1.5"
                          >
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. sarah@example.com"
                            className={`w-full px-4 py-2.5 rounded-lg bg-white border ${
                              errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                            } text-sm text-[#1B2430] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-colors`}
                          />
                          {errors.email && (
                            <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-semibold text-[#1F3A5F] uppercase tracking-wider mb-1.5"
                        >
                          Service Needed <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#1B2430] focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-colors"
                        >
                          <option value="Residential Painting">Residential Painting</option>
                          <option value="Commercial Painting">Commercial Painting</option>
                          <option value="Trash Outs">Trash Outs</option>
                          <option value="Pressure Washing">Pressure Washing</option>
                        </select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-[#1F3A5F] uppercase tracking-wider mb-1.5"
                        >
                          Project Details / Notes (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about the property, rooms, timeline, or special requirements..."
                          className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-[#1B2430] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D9A441] transition-colors resize-y"
                        ></textarea>
                      </div>

                      {/* Submit Button (Solid warm sandy gold #D9A441) */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#D9A441] hover:bg-[#C49234] text-[#14263F] font-bold text-base px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A5F]"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-[#14263F] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#14263F]" />
                            <span>Request Free Quote</span>
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-center text-slate-500 pt-1">
                        We respect your privacy. No spam. Fast local response in the Florida Panhandle.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slim Dark Navy Footer (#14263F) */}
      <footer className="bg-[#14263F] text-white pt-12 pb-16 sm:pb-12 border-t border-[#1F3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            {/* Logo in dark variant */}
            <div className="flex items-center">
              <Logo variant="dark" size="sm" />
            </div>

            {/* Tagline & Trust Badge */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-1">
              <p className="text-xs sm:text-sm text-[#6B8CAE] italic font-medium">
                "Serving the panhandle with reliable, quality work."
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                <span className="font-semibold text-white">Licensed &amp; Insured</span>
                <span className="text-[#6B8CAE]">&bull;</span>
                <a
                  href={phoneTel}
                  className="text-white hover:text-[#D9A441] transition-colors font-medium tabular-nums"
                >
                  {phoneNumberDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Slim bottom copyright row (Strictly NO street address) */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Southern Shore Painting. All rights reserved.
            </p>
            <p className="text-[#6B8CAE]">
              House Painting, Pressure Washing &amp; Trash Outs in the Florida Panhandle
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button on Mobile */}
      <div className="sm:hidden fixed bottom-5 right-5 z-40">
        <a
          href={phoneTel}
          className="inline-flex items-center gap-2 bg-[#D9A441] text-[#14263F] px-4 py-3 rounded-full shadow-lg font-bold text-sm tracking-wide active:scale-95 transition-transform border border-amber-300/40"
          aria-label={`Call Southern Shore Painting at ${phoneNumberDisplay}`}
        >
          <Phone className="w-4 h-4 fill-[#14263F]" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
