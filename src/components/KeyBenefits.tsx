import { Card } from "@/components/ui/card";
import { Clock, Target, Users, TrendingUp, Lightbulb, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Instant Coaching",
    description: "Get answers to your toughest sales questions anytime, anywhere — no scheduling required"
  },
  {
    icon: Target,
    title: "Deep Alignment",
    description: "Responses perfectly match Jamal's voice, methods, and strategic frameworks"
  },
  {
    icon: BookOpen,
    title: "Access Full Library",
    description: "Makes Jamal's complete work accessible without having to dig through courses"
  },
  {
    icon: Users,
    title: "Perfect for All Levels",
    description: "Great first step for new members, tactical support for experienced sellers"
  },
  {
    icon: TrendingUp,
    title: "Scales Impact",
    description: "Get high-quality coaching without adding to Jamal's live calendar"
  },
  {
    icon: Lightbulb,
    title: "Tactical Implementation",
    description: "Answers specific questions in the moment you need them most"
  }
];

export const KeyBenefits = () => {
  return (
    <section className="py-24 bg-tech-gradient relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-ai-glow opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Members Love Coach Jamal
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Powerful benefits that transform how you learn and implement strategic sales techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-white/5 backdrop-blur-sm border-secondary/30 border-2">
            <p className="text-lg text-white/90 mb-2">
              <span className="font-bold text-secondary">Pro Tip:</span> Pair Coach Jamal with live sessions for maximum impact
            </p>
            <p className="text-white/70">
              "Ask Coach Jamal before you join the workshop" or "Check Coach Jamal's take before the call"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};