import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Copy, Share, Trophy, Gift, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const ReferralSection = () => {
  const [referralCode] = useState("DIGIMAX123");

  const referralLevels = [
    {
      level: 1,
      percentage: "30%",
      title: "Direct Referral",
      description: "Bonus langsung dari orang yang Anda ajak",
      icon: <Users className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      level: 2,
      percentage: "20%",
      title: "Second Level",
      description: "Bonus dari referral tingkat kedua", 
      icon: <Share className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      level: 3,
      percentage: "5%",
      title: "Third Level & Beyond",
      description: "Bonus dari semua level selanjutnya",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Kode referral berhasil disalin!");
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join DigiMax",
        text: `Bergabunglah dengan DigiMax menggunakan kode referral saya: ${referralCode}`,
        url: `https://digimax.com/register?ref=${referralCode}`,
      });
    } else {
      copyReferralCode();
    }
  };

  return (
    <section id="referral" className="py-20 bg-gradient-to-br from-primary/5 via-accent to-primary-light/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Program Referral DigiMax
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dapatkan penghasilan tambahan dengan mengajak teman dan keluarga bergabung. 
            Semakin banyak yang Anda ajak, semakin besar bonus yang Anda dapatkan!
          </p>
        </div>

        {/* Referral Levels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {referralLevels.map((level, index) => (
            <Card key={level.level} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className={`absolute top-0 left-0 right-0 h-1 ${level.color}`}></div>
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  {level.icon}
                </div>
                <CardTitle className="text-xl mb-2">Level {level.level}</CardTitle>
                <Badge variant="outline" className="text-2xl font-bold py-2 px-4 bg-gradient-to-r from-primary/10 to-primary-light/10">
                  {level.percentage}
                </Badge>
              </CardHeader>
              
              <CardContent className="text-center">
                <h4 className="font-semibold mb-2">{level.title}</h4>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-primary" />
              Cara Kerja Program Referral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Bagikan Kode</h4>
                <p className="text-sm text-muted-foreground">
                  Bagikan kode referral unik Anda kepada teman dan keluarga
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Mereka Bergabung</h4>
                <p className="text-sm text-muted-foreground">
                  Ketika mereka mendaftar dan melakukan deposit pertama
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Dapatkan Bonus</h4>
                <p className="text-sm text-muted-foreground">
                  Terima bonus sesuai level referral secara otomatis
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Code Share */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Kode Referral Anda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input 
                value={referralCode} 
                readOnly 
                className="text-center text-lg font-mono bg-background"
              />
              <Button onClick={copyReferralCode} variant="outline" size="icon">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={shareReferral}
                className="flex-1 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary"
              >
                <Share className="w-4 h-4 mr-2" />
                Bagikan Kode
              </Button>
              <Button 
                onClick={copyReferralCode}
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Salin Kode
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Link referral lengkap Anda:
              </p>
              <div className="bg-background p-3 rounded-lg border break-all text-sm">
                https://digimax.com/register?ref={referralCode}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Keuntungan Program Referral</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">Unlimited</div>
              <div className="text-sm text-muted-foreground">Jumlah Referral</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">Instant</div>
              <div className="text-sm text-muted-foreground">Bonus Payout</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">Multi-Level</div>
              <div className="text-sm text-muted-foreground">Bonus System</div>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};