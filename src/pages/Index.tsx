import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { RealTimeCharts } from "@/components/RealTimeCharts";
import { ServicesSection } from "@/components/ServicesSection";
import { ReferralSection } from "@/components/ReferralSection";
import { AuthModals } from "@/components/AuthModals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Headphones } from "lucide-react";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleGetStarted = () => {
    setIsRegisterOpen(true);
  };

  const handleLogin = () => {
    setIsLoginOpen(true);
  };

  const handleRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleSelectPackage = () => {
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        onLoginClick={handleLogin}
        onRegisterClick={handleRegister}
      />

      {/* Hero Section */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* Real-time Charts */}
      <RealTimeCharts />

      {/* Services Section */}
      <ServicesSection onSelectPackage={handleSelectPackage} />

      {/* Referral Section */}
      <ReferralSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Mengapa Memilih DigiMax?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform investasi digital terpercaya dengan teknologi terdepan dan track record terbukti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold mb-2">Keamanan Terjamin</h3>
              <p className="text-sm text-muted-foreground">
                Sistem keamanan berlapis dengan enkripsi tingkat bank dan cold storage
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Bersertifikat</h3>
              <p className="text-sm text-muted-foreground">
                Terdaftar dan diawasi oleh otoritas keuangan terpercaya
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Komunitas Global</h3>
              <p className="text-sm text-muted-foreground">
                Bergabung dengan 50,000+ investor aktif dari seluruh dunia
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Support 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Tim customer service profesional siap membantu kapan saja
              </p>
            </Card>
          </div>

          {/* Company Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Tentang DigiMax</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      DigiMax adalah platform investasi digital yang menggabungkan teknologi blockchain terdepan 
                      dengan strategi investasi profesional. Kami berkomitmen untuk memberikan akses investasi 
                      yang mudah, aman, dan menguntungkan bagi semua kalangan.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Dengan tim ahli berpengalaman dan teknologi AI canggih, DigiMax menawarkan solusi investasi 
                      yang disesuaikan dengan profil risiko dan tujuan finansial setiap investor.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <span className="font-medium">Tahun Berdiri</span>
                      <span className="text-primary font-bold">2020</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <span className="font-medium">Total Aset Kelola</span>
                      <span className="text-primary font-bold">$2.5B+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <span className="font-medium">Investor Aktif</span>
                      <span className="text-primary font-bold">50,000+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <span className="font-medium">Negara Beroperasi</span>
                      <span className="text-primary font-bold">25+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold">DigiMax</span>
              </div>
              <p className="text-background/70 text-sm">
                Platform investasi digital terpercaya untuk masa depan finansial yang lebih baik.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Paket Investasi</li>
                <li>Program Referral</li>
                <li>Analisis Market</li>
                <li>Portfolio Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Press Release</li>
                <li>Partnership</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>FAQ</li>
                <li>Customer Service</li>
                <li>Kebijakan Privasi</li>
                <li>Syarat & Ketentuan</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm text-background/70">
              © 2024 DigiMax. Semua hak dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modals */}
      <AuthModals
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onRegisterClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
    </div>
  );
};

export default Index;