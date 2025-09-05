import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent leading-tight">
            Masa Depan Digital
            <br />
            <span className="text-foreground">Dimulai Dari Sini</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Platform investasi digital terpercaya untuk membangun kekayaan jangka panjang dengan teknologi terdepan dan analisis real-time.
          </p>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-border shadow-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">100% Aman & Terpercaya</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-border shadow-sm">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Analisis Real-time</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-border shadow-sm">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Komunitas Global</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-lg px-8 py-4 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Mulai Investasi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Pelajari Selengkapnya
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Investor Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₹2.5B+</div>
              <div className="text-sm text-muted-foreground">Total Investasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};