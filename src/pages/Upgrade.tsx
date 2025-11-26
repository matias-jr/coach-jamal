import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, TrendingUp, Brain, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark via-navy-base to-navy-dark">
      {/* Header with urgency */}
      <div className="bg-secondary py-4">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-lg">
            *** This Offer Is Only Available Here On This Page ***
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Video Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-md border-2 border-secondary rounded-2xl overflow-hidden">
            <div className="aspect-video bg-navy-light/50 flex flex-col items-center justify-center p-8">
              <Video className="w-20 h-20 text-secondary mb-4" />
              <p className="text-white/80 text-center text-lg">
                Video Message from Jamal
              </p>
              <p className="text-white/60 text-center text-sm mt-2">
                [Video placeholder - Jamal explains the full Elite upgrade]
              </p>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-white/90">Limited Time Upgrade Offer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upgrade to Whyzer Elite and Get Everything
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            You're already getting Coach Jamal AI for $19/mo. Now unlock the complete arsenal 
            that elite sellers use to close 7- and 8-figure deals.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Current Plan */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-6">
              <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Your Current Plan</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-lg text-white/60">/month</span>
              </div>
              <p className="text-white/60">Coach Jamal AI Only</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">24/7 access to Coach Jamal AI</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Instant answers to sales questions</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/40 line-through">Account intelligence platform</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/40 line-through">AI-powered Point of View creation</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/40 line-through">The Vault (full content library)</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/40 line-through">Live monthly sessions</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/40 line-through">Financial data analysis</span>
              </div>
            </div>
            
            <Button 
              variant="outlineLight" 
              size="lg" 
              className="w-full text-lg py-6 h-auto mt-6"
              asChild
            >
              <Link to="/checkout">
                Continue with Coach Jamal
              </Link>
            </Button>
          </div>

          {/* Elite Plan */}
          <div className="bg-gradient-to-br from-secondary/20 to-accent/10 backdrop-blur-md border-2 border-secondary rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-secondary px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">BEST VALUE</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Whyzer Elite</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$97</span>
                <span className="text-lg text-white/60">/month</span>
              </div>
              <p className="text-white/80 font-medium">Complete Sales Arsenal</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90 font-medium">Everything in $19/mo plan</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">AI-powered Point of View platform</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Financial data & earnings analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">AI-generated account podcasts</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">The Vault - Complete content library</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Pipeline Flywheel program</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Elite Sellers Playbook</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">MDA Masterclass</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Executive Outreach Course</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Live monthly coaching sessions</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full text-lg py-6 h-auto"
              asChild
            >
              <a href="https://subscribe.whyzer.ai/elite-monthly" target="_blank" rel="noopener noreferrer">
                Upgrade to Elite Now
              </a>
            </Button>
          </div>
        </div>

        {/* Key Features Deep Dive */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Here's What You Get When You Upgrade to Elite
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Build Boardroom-Ready Point of Views in Minutes
              </h3>
              <p className="text-white/70 mb-4">
                Account intel doesn't create pipeline. A killer Point of View does. Whyzer transforms 
                thousands of financial data points into a strategic point of view — so you can speak 
                to executive outcomes, not product specs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Follow the Money
              </h3>
              <p className="text-white/70 mb-4">
                Whyzer highlights exactly where your target accounts are investing time, money, and 
                attention — so you can align your message to their most urgent initiatives with 
                interactive visualizations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                AI-Generated Account Podcasts
              </h3>
              <p className="text-white/70 mb-4">
                Understand your account's latest challenges and results better than their own employees 
                with AI-generated podcasts that break down complex financial data into actionable insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                The Vault: Full Arsenal Access
              </h3>
              <p className="text-white/70 mb-4">
                Jamal Reimer's complete playbook for elite enterprise selling. The exact frameworks, 
                templates, and strategies used by reps closing 7- and 8-figure deals — from pipeline 
                architecture to executive outreach sequences.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Elite Sellers Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "What used to take a rep a year, I can do in two weeks with Whyzer. It helps us work on the right accounts.",
                author: "David Inukpuk"
              },
              {
                quote: "It's built for our specific needs. Way better than agents like Perplexity or Claude for strategic selling.",
                author: "Brian Tripp"
              },
              {
                quote: "Feels like a business analyst is watching your back… all the context is laid out.",
                author: "Matt Brown"
              },
              {
                quote: "Compared to tools like HockeyStack, Whyzer makes detailed info from 10Ks, 10Qs, and earnings reports actually usable for salespeople.",
                author: "Lee Winer"
              },
              {
                quote: "I love the earnings call summaries and use chat constantly",
                author: "Michael Corvo"
              },
              {
                quote: "Absolutely necessary and needed in our profession.",
                author: "Rob Sader"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <p className="text-white/80 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-secondary font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-secondary/20 to-accent/10 backdrop-blur-md border-2 border-secondary rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Elite Sellers?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Upgrade now and get instant access to everything elite sellers use to close bigger deals faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto"
              asChild
            >
              <a href="https://subscribe.whyzer.ai/elite-monthly" target="_blank" rel="noopener noreferrer">
                Upgrade to Elite - $97/mo
              </a>
            </Button>
            <Button 
              variant="outlineLight" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto"
              asChild
            >
              <a href="https://subscribe.whyzer.ai/elite-annually" target="_blank" rel="noopener noreferrer">
                Save with Annual - $997/yr
              </a>
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            This exclusive upgrade offer is only available on this page
          </p>
        </div>
      </div>
    </div>
  );
}
