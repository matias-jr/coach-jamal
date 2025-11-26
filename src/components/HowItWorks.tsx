import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, Lightbulb, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Ask Your Question",
    description: "Type in any sales challenge, strategy question, or scenario you're facing"
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Processes",
    description: "Coach Jamal searches through Jamal's complete knowledge base and frameworks"
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Get Strategic Answer",
    description: "Receive a structured response with frameworks, examples, and actionable steps"
  },
  {
    number: "04",
    icon: Target,
    title: "Implement & Win",
    description: "Apply the insights immediately to your deal or sales situation"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, powerful, and built for strategic sellers who need answers fast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center relative hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/20"
              >
                <div className="absolute -top-4 left-6 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <Icon className="w-12 h-12 text-secondary mx-auto mb-4 mt-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary/30" />
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Real Examples of What You Can Ask
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"How do I write a POV for cold outbound to a CFO?"</p>
            </div>
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"What's Jamal's take on executive presence in discovery?"</p>
            </div>
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"How would you run a high-stakes internal deal review?"</p>
            </div>
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"What part of Pipeline Flywheel should I focus on if I'm not converting meetings?"</p>
            </div>
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"What does Jamal say about multithreading when your champion goes dark?"</p>
            </div>
            <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-foreground font-medium">"How do I position value in a competitive enterprise deal?"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};