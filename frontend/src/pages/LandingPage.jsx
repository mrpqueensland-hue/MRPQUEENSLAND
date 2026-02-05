import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ChevronDown, Activity, Zap, Radio, Heart, Mail, Share2, AlertTriangle, FileText } from "lucide-react";
import PosterDownload from "../components/PosterDownload";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Suggested domains for display
const suggestedDomains = [
  "mrpcrisis.com.au",
  "savemrp.org.au", 
  "mrpgap.com.au",
  "modernmedicine.org.au",
  "not1950.com.au"
];

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`${API}/signup`, { email });
      if (response.data.success) {
        toast.success(response.data.message);
        setSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]" data-testid="landing-page">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2" data-testid="hero-section">
        {/* Left - X-Ray Machine Images */}
        <div className="relative overflow-hidden bg-[#111] flex items-center justify-center p-4 lg:p-0">
          <div className="relative w-full h-full">
            {/* Main hero image */}
            <img 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.rU3ieSi5-7YqQdNPVWj7DAHaD4%3Fpid%3DApi&f=1"
              alt="X-ray machine operator at work"
              className="w-full h-[50vh] lg:h-[70vh] object-cover vintage-filter duotone-red"
              data-testid="hero-image"
            />
            {/* Secondary images grid */}
            <div className="grid grid-cols-2 gap-1">
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.0EowzeUF-hEvteWAsq6EegHaEK%3Fpid%3DApi&f=1"
                alt="Modern CT scanner"
                className="w-full h-32 lg:h-40 object-cover vintage-filter"
                data-testid="hero-image-2"
              />
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.e0U58LKeypme4TFBcK5U7QHaEL%3Fpid%3DApi&f=1"
                alt="MRI machine"
                className="w-full h-32 lg:h-40 object-cover vintage-filter"
                data-testid="hero-image-3"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 border-l-4 border-[#FF3B30]">
              <p className="font-mono text-sm text-white/70">
                THIS IS MODERN HEALTHCARE — NOT 1950
              </p>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-24 bg-[#0a0a0a]">
          <div className="max-w-xl">
            <p className="font-mono text-[#FF3B30] text-sm tracking-widest mb-4 animate-pulse" data-testid="hero-subtitle">
              ⚠ WORKFORCE CRISIS ALERT
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6" data-testid="hero-title">
              HEALTH MINISTER
              <br />
              <span className="text-[#FF3B30]">IGNORES HIS OWN</span>
              <br />
              <span className="text-[#F5A623]">WORKFORCE REPORT</span>
            </h1>
            <p className="font-body text-lg text-white/70 mb-6 leading-relaxed" data-testid="hero-description">
              The Queensland Government published a damning workforce gap analysis. 
              It shows <span className="text-[#FF3B30] font-bold">909 Medical Radiation Professionals missing by 2032</span>. 
              The Minister's response? <span className="text-[#FF3B30] font-bold uppercase">Complete silence.</span>
            </p>
            <div className="p-4 bg-[#FF3B30]/20 border-l-4 border-[#FF3B30] mb-8">
              <p className="font-mono text-sm text-white/90">
                Does the Health Minister think it's still the 1950s "Carry On" movie era — 
                where only doctors and nurses mattered?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('crisis')}
                className="btn-primary flex items-center justify-center gap-2"
                data-testid="see-gap-btn"
              >
                SEE THE EVIDENCE
                <ChevronDown className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('action')}
                className="btn-secondary"
                data-testid="join-watchlist-btn"
              >
                TAKE ACTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="hidden lg:flex justify-center pb-8 bg-[#0a0a0a]">
        <ChevronDown className="w-8 h-8 text-white/30 bounce" />
      </div>

      {/* Crisis Stats Section */}
      <section id="crisis" className="py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#0a0a0a] section-divider" data-testid="crisis-section">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-8 h-8 text-[#FF3B30] animate-pulse" />
            <h2 className="font-heading text-3xl md:text-4xl text-white">THE MINISTER'S OWN REPORT</h2>
          </div>
          <p className="font-body text-lg text-[#FF3B30] mb-4">
            These numbers come directly from Queensland Health's Workforce Gap Analysis — 
            the report the Minister ordered, then ignored.
          </p>
          <p className="font-mono text-sm text-white/50 mb-8">
            SOURCE: QLD HEALTH WORKFORCE GAP ANALYSIS, NOVEMBER 2025
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="stat-card" data-testid="stat-workforce-gap">
              <span className="font-mono text-sm text-white/50 uppercase tracking-widest">WORKFORCE GAP</span>
              <span className="font-heading text-5xl md:text-6xl text-[#FF3B30]">909</span>
              <span className="font-body text-lg text-white/70">Full-Time Equivalent positions</span>
            </div>
            <div className="stat-card border-[#F5A623]" data-testid="stat-demand-met">
              <span className="font-mono text-sm text-white/50 uppercase tracking-widest">DEMAND MET BY 2032</span>
              <span className="font-heading text-5xl md:text-6xl text-[#F5A623]">58%</span>
              <span className="font-body text-lg text-white/70">Only 58% of what's needed</span>
            </div>
            <div className="stat-card border-white" data-testid="stat-shortfall">
              <span className="font-mono text-sm text-white/50 uppercase tracking-widest">SHORTFALL</span>
              <span className="font-heading text-5xl md:text-6xl text-white">42%</span>
              <span className="font-body text-lg text-white/70">Of patients won't get care</span>
            </div>
          </div>

          <div className="mt-16 p-8 bg-[#111] border border-white/10">
            <p className="font-body text-xl text-white/80 leading-relaxed">
              "Without targeted action, supply gaps will continue to undermine access, quality, and system sustainability."
            </p>
            <p className="font-mono text-sm text-[#FF3B30] mt-4">
              — Queensland Health Workforce Gap Analysis, Page 22
            </p>
          </div>
        </div>
      </section>

      {/* Reality Check - What Minister Said vs Report */}
      <section className="py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#111] section-divider" data-testid="reality-check-section">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-8 h-8 text-[#F5A623]" />
            <h2 className="font-heading text-3xl md:text-4xl text-white">DELIBERATE IGNORANCE?</h2>
          </div>
          <p className="font-body text-lg text-white/60 mb-12">
            The Minister released a press statement about the report. Here's what he said — and what he conveniently left out.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Minister's Statement */}
            <div className="p-8 bg-[#0a0a0a] border-2 border-[#FF3B30]" data-testid="minister-says-card">
              <h3 className="font-mono text-sm text-[#FF3B30] uppercase tracking-widest mb-4">
                THE MINISTER SAYS
              </h3>
              <div className="space-y-4">
                <p className="font-body text-lg text-white/80">
                  "We are committed to 46,000 additional staff by 2032"
                </p>
                <p className="font-body text-lg text-white/80">
                  "4,500 extra health workers in 2025-26"
                </p>
                <p className="font-body text-lg text-white/80 italic">
                  Focus on: Doctors, Nurses, Paramedics
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-mono text-sm text-white/40">
                  MRPs mentioned: <span className="text-[#FF3B30] font-bold">0 TIMES</span>
                </p>
              </div>
            </div>

            {/* Report Says */}
            <div className="p-8 bg-[#0a0a0a] border-2 border-white" data-testid="report-says-card">
              <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-4">
                THE REPORT SAYS
              </h3>
              <div className="space-y-4">
                <p className="font-body text-lg text-white/80">
                  Medical Radiation Professionals face <span className="text-[#FF3B30] font-bold">909 FTE gap</span>
                </p>
                <p className="font-body text-lg text-white/80">
                  Only <span className="text-[#F5A623] font-bold">58%</span> of MRP demand met by 2032
                </p>
                <p className="font-body text-lg text-white/80">
                  "Critical workforce shortages impact capacity"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-mono text-sm text-white/40">
                  Action required: <span className="text-[#FF3B30] font-bold">URGENT</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#FF3B30]/10 border border-[#FF3B30]/30">
            <p className="font-heading text-xl text-[#FF3B30] text-center">
              ~80% OF HOSPITAL PATIENTS REQUIRE MRPS FOR DIAGNOSIS AND/OR TREATMENT
            </p>
          </div>
        </div>
      </section>

      {/* What are MRPs Section */}
      <section className="py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#0a0a0a] section-divider" data-testid="mrp-section">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Activity className="w-8 h-8 text-[#FF3B30]" />
            <h2 className="font-heading text-3xl md:text-4xl text-white">WHAT ARE MRPs?</h2>
          </div>
          <p className="font-body text-lg text-white/60 mb-12 max-w-2xl">
            Medical Radiation Professionals are essential healthcare workers who use advanced technology 
            to diagnose and treat patients. Without them, modern hospitals simply cannot function.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card-brutalist group" data-testid="mrp-card-radiographers">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF3B30] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl text-white">RADIOGRAPHERS</h3>
              </div>
              <p className="font-body text-white/60">
                X-rays, CT scans, MRIs — they see inside you to find what's wrong. 
                Every broken bone, every tumor, every diagnosis starts here.
              </p>
            </div>

            <div className="card-brutalist group" data-testid="mrp-card-sonographers">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F5A623] flex items-center justify-center">
                  <Radio className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-heading text-xl text-white">SONOGRAPHERS</h3>
              </div>
              <p className="font-body text-white/60">
                Ultrasound experts. From monitoring pregnancies to detecting heart conditions, 
                they provide critical real-time imaging.
              </p>
            </div>

            <div className="card-brutalist group" data-testid="mrp-card-nuclear">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="font-heading text-xl text-white">NUCLEAR MEDICINE</h3>
              </div>
              <p className="font-body text-white/60">
                Using radioactive materials to diagnose and treat diseases. 
                Essential for cancer detection and thyroid treatments.
              </p>
            </div>

            <div className="card-brutalist group" data-testid="mrp-card-radiation">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF3B30] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl text-white">RADIATION THERAPISTS</h3>
              </div>
              <p className="font-body text-white/60">
                Cancer fighters. They deliver precise radiation treatments 
                that destroy tumors while protecting healthy tissue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section id="action" className="py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#111] section-divider" data-testid="action-section">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-[#FF3B30] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            DON'T LET THEM IGNORE THIS
          </h2>
          <p className="font-body text-lg text-white/60 mb-8">
            Join the watchlist. We'll keep you updated as this workforce crisis unfolds 
            and let you know how you can help.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" data-testid="signup-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 input-brutalist bg-[#0a0a0a] border-2 border-white/20 px-6 focus:border-[#FF3B30]"
                required
                data-testid="email-signup-input"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
                data-testid="email-signup-submit"
              >
                {loading ? "JOINING..." : "JOIN THE WATCHLIST"}
              </button>
            </form>
          ) : (
            <div className="p-6 bg-[#FF3B30]/20 border border-[#FF3B30]" data-testid="signup-success">
              <p className="font-heading text-xl text-[#FF3B30]">YOU'RE ON THE LIST</p>
              <p className="font-body text-white/70 mt-2">We'll keep you informed.</p>
            </div>
          )}

          <p className="font-mono text-xs text-white/30 mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Posters & Social Media Section */}
      <section className="py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#0a0a0a] section-divider" data-testid="posters-section">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Share2 className="w-8 h-8 text-[#F5A623]" />
            <h2 className="font-heading text-3xl md:text-4xl text-white">SPREAD THE WORD</h2>
          </div>
          <p className="font-body text-lg text-white/60 mb-12 max-w-2xl">
            Download and share these materials to help raise awareness about the MRP workforce crisis.
            All posters available as printable PDFs.
          </p>

          <PosterDownload />

          {/* Domain Suggestions */}
          <div className="mt-16 p-8 bg-[#111] border border-white/10" data-testid="domain-suggestions">
            <h3 className="font-mono text-sm text-white/50 uppercase tracking-widest mb-4">
              SUGGESTED DOMAIN NAMES
            </h3>
            <div className="flex flex-wrap gap-4">
              {suggestedDomains.map((domain, i) => (
                <span 
                  key={i}
                  className="font-mono text-lg text-[#F5A623] bg-[#F5A623]/10 px-4 py-2 border border-[#F5A623]/30"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/10" data-testid="footer">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="font-heading text-2xl text-white mb-4">MRP WORKFORCE CRISIS</p>
              <p className="font-body text-white/50 max-w-md">
                Raising awareness about the critical shortage of Medical Radiation Professionals 
                in Queensland's healthcare system.
              </p>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-sm text-white/50 mb-2">CONTACT</p>
              <a href="mailto:MRPQUEENSLAND@GMAIL.COM" className="font-body text-white hover:text-[#FF3B30] transition-colors">MRPQUEENSLAND@GMAIL.COM</a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="pt-8 border-t border-white/10" data-testid="disclaimer">
            <p className="font-mono text-xs text-white/30 text-center max-w-3xl mx-auto">
              DISCLAIMER: This website is not affiliated with any union or political party. 
              It is an independent community initiative aimed at preventing a healthcare workforce crisis 
              before it's allowed to occur. All statistics cited are from the official Queensland Health 
              Workforce Gap Analysis published November 2025.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="font-mono text-xs text-white/20">
              © 2025 MRP Workforce Awareness Initiative
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
