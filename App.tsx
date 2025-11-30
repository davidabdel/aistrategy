import React from 'react';
import {
  Calendar,
  Clock,
  Settings,
  TrendingUp,
  Users,
  Briefcase,
  Home,
  Coffee,
  Hammer,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';

import { Button } from './components/Button';
import { Section } from './components/Section';
import { FeatureItem } from './components/FeatureItem';
import { TestimonialCard } from './components/TestimonialCard';
import { InfoCard } from './components/InfoCard';

const App: React.FC = () => {
  const handleBooking = () => {
    window.location.href = 'https://lp.alwaysanswer.com.au/cal';
  };

  return (
    <div className="min-h-screen bg-white text-[#111]">

      {/* Sticky Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-[#1A73E8]">AI Strategy</div>
          <Button size="sm" onClick={handleBooking}>
            Book Free Session
          </Button>
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <Section className="text-center pt-20 pb-20">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.15] text-gray-900">
            Know you need AI — but worried it’ll be expensive or confusing?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
            In just 30 minutes, I’ll show you exactly where a tiny bit of AI can save you money immediately — without any big changes.
          </p>

          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 relative overflow-hidden transform transition hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">
              Black Friday Sale
            </div>
            <div className="mb-8">
              <p className="text-gray-500 font-medium mb-1 line-through decoration-red-400 decoration-2">Valued at $150</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-[#1A73E8]">FREE</span>
              </div>
            </div>

            <Button fullWidth size="lg" onClick={handleBooking}>
              Book your FREE 30-minute AI strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="mt-6 space-y-3 text-sm text-gray-500">
              <p className="flex items-center justify-center">
                <Check className="w-4 h-4 mr-2 text-green-500" /> 100% No Pressure
              </p>
              <p className="flex items-center justify-center">
                <Check className="w-4 h-4 mr-2 text-green-500" /> 100% Practical
              </p>
              <p className="flex items-center justify-center">
                <Check className="w-4 h-4 mr-2 text-green-500" /> You walk away with a plan
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — Why You’re Struggling */}
      <Section background="gray" className="border-y border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why You’re Struggling With AI <br className="hidden sm:block" />(And That’s Normal)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Most business owners feel the same three things when it comes to AI. You aren't alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/50">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-xl mb-3">"It’s going to cost a fortune."</h3>
            <p className="text-gray-600">You think you need enterprise software. Usually, you just need a $20/month tool.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/50">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="font-bold text-xl mb-3">"It’s too complicated."</h3>
            <p className="text-gray-600">Setup often takes minutes, not weeks. I strip away the complex parts.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/50">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-bold text-xl mb-3">"I don't want to break things."</h3>
            <p className="text-gray-600">We don't rebuild your business. We just add tiny helpers to what you already do.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-gray-900">
            You’re not behind — you’re just overloaded with information.
            <br className="hidden md:block" />
            <span className="text-[#1A73E8]">My job is to simplify it for you.</span>
          </p>
        </div>
      </Section>

      {/* SECTION 3 — What You Get */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              What You Get in the <br /><span className="text-[#1A73E8]">30-Minute Strategy Session</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We cut through the noise. No PowerPoint presentations. Just a conversation about your business and practical solutions.
            </p>
            <div className="space-y-2">
              <FeatureItem>The 1–3 spots in your business where AI can save money right away</FeatureItem>
              <FeatureItem>Tiny automations that take minutes to set up</FeatureItem>
              <FeatureItem>Simple ways to reduce admin and increase speed</FeatureItem>
              <FeatureItem>Real examples from your industry</FeatureItem>
              <FeatureItem>A clear roadmap — no jargon, no tech overwhelm</FeatureItem>
            </div>
            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100 inline-block">
              <p className="font-medium text-green-800 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" />
                You’ll walk out knowing EXACTLY what to do next.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-[#1A73E8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">30 Minutes</h4>
                    <p className="text-sm text-gray-500">Video Call</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-[#1A73E8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ROI Focus</h4>
                    <p className="text-sm text-gray-500">Immediate savings identified</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-[#1A73E8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Action Plan</h4>
                    <p className="text-sm text-gray-500">PDF Roadmap delivered after call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — The "Immediate Savings" Breakdown */}
      <Section background="gray" className="border-y border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">The “Immediate Savings” Breakdown</h2>
          <p className="text-xl text-gray-600">
            Most businesses waste money every month on simple things. <br />
            <span className="font-semibold text-gray-900">AI fixes these fast — and often cheaply.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard icon={<Clock className="w-6 h-6" />} title="Missed Calls">
            Don't let voicemail be a dead end. AI can answer, take messages, and even book appointments.
          </InfoCard>
          <InfoCard icon={<Briefcase className="w-6 h-6" />} title="Slow Admin">
            Invoicing, data entry, and email sorting can be automated to happen instantly in the background.
          </InfoCard>
          <InfoCard icon={<Settings className="w-6 h-6" />} title="Manual Processes">
            Stop copying and pasting data between spreadsheets. Let a tiny script do it for you.
          </InfoCard>
          <InfoCard icon={<Users className="w-6 h-6" />} title="Repetitive Tasks">
            Answering the same customer questions? An AI assistant can handle 80% of inquiries instantly.
          </InfoCard>
          <InfoCard icon={<TrendingUp className="w-6 h-6" />} title="Staff Time">
            Free up your team to do high-value work instead of things software could do for pennies.
          </InfoCard>
        </div>
      </Section>

      {/* SECTION 5 — Why This Works */}
      <Section>
        <div className="bg-[#1A73E8] rounded-3xl p-8 sm:p-16 text-white text-center shadow-2xl shadow-blue-900/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why This Works (Even if You Hate Tech)</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-blue-600/50 p-6 rounded-xl border border-blue-500 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-3">Simple English</h3>
              <p className="text-blue-100">I explain everything in plain English. No buzzwords. No confusing acronyms.</p>
            </div>
            <div className="bg-blue-600/50 p-6 rounded-xl border border-blue-500 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-3">Fast Setup</h3>
              <p className="text-blue-100">I only suggest AI tools that take minutes to implement — not months.</p>
            </div>
            <div className="bg-blue-600/50 p-6 rounded-xl border border-blue-500 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-3">Practical Edge</h3>
              <p className="text-blue-100">It’s not about replacing people. It’s about saving time, money, and getting an edge.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — Who This Is For */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who This Is For</h2>
          <p className="text-lg text-gray-600">If you run a business and want more profit with less effort — this is for you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Hammer className="w-8 h-8 mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold">Tradies</h3>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Home className="w-8 h-8 mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold">Real Estate</h3>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Users className="w-8 h-8 mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold">Health & Beauty</h3>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Coffee className="w-8 h-8 mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold">Hospitality</h3>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          ...and anyone with customers, calls, or admin.
        </div>
      </Section>

      {/* SECTION 7 — Book Your Session */}
      <Section id="booking" className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gray-900">
          Ready to see where AI can <br /><span className="text-[#1A73E8]">save you money immediately?</span>
        </h2>

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100 my-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm">
            Black Friday Sale
          </div>
          <div className="mb-8">
            <p className="text-gray-500 font-medium mb-1 line-through decoration-red-400 decoration-2">Valued at $150</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl font-bold text-[#1A73E8]">FREE</span>
            </div>
          </div>

          <Button fullWidth size="lg" onClick={handleBooking}>
            Book your FREE 30-minute AI strategy Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="mt-6 space-y-3 text-sm text-gray-500">
            <p className="flex items-center justify-center">
              <Check className="w-4 h-4 mr-2 text-green-500" /> 100% No Pressure
            </p>
            <p className="flex items-center justify-center">
              <Check className="w-4 h-4 mr-2 text-green-500" /> 100% Practical
            </p>
            <p className="flex items-center justify-center">
              <Check className="w-4 h-4 mr-2 text-green-500" /> You walk away with a plan
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — Social Proof */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Others Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I thought AI was going to be too expensive — turns out I just needed two tiny automations. Saved us hours a week."
            author="Small Business Owner"
          />
          <TestimonialCard
            quote="This session helped me understand AI in a way that finally made sense."
            author="Restaurant Owner"
          />
          <TestimonialCard
            quote="We found two easy wins that saved money straight away."
            author="Tradie"
          />
        </div>
      </Section>

      {/* SECTION 9 — Final Reassurance + CTA */}
      <Section className="text-center py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">No pressure. No jargon. No complicated tech.</h2>
          <p className="text-xl text-gray-600 mb-10">Just clarity, savings, and a simple plan.</p>
          <Button size="lg" onClick={handleBooking} className="shadow-lg hover:shadow-xl">
            👉 Book your FREE Session Now
          </Button>
        </div>
      </Section>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Simple AI Strategy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
