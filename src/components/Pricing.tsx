import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export const Pricing = () => {
  return <section className="py-24 bg-gradient-to-b from-navy-dark to-navy-base relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-ai-glow opacity-30" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock Coach Jamal Today
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get 24/7 access to AI-powered coaching trained on Jamal's complete library
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white">$19</span>
                <span className="text-xl text-white/60">/month</span>
              </div>
              <p className="text-white/70">Whyzer Elite Membership</p>
            </div>

            <div className="space-y-4 mb-8">
              {["24/7 access to Coach Jamal AI", "Trained on 100+ hours of content", "$200M+ in proven frameworks", "Instant answers to sales questions", "Updated continuously with new insights", "Direct access to Jamal's methodologies"].map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </div>)}
            </div>

            <Button variant="hero" size="lg" className="w-full text-lg py-6 h-auto" asChild>
              <Link to="/upgrade">
                Get Started Now
              </Link>
            </Button>

            <p className="text-center text-sm text-white/50 mt-6">Join Elite Sellers Community members already using Coach Jamal</p>
          </div>
        </div>
      </div>
    </section>;
};