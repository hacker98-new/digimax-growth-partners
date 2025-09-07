import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Zap } from "lucide-react";

interface ServicesSectionProps {
  onSelectPackage: () => void;
}

export const ServicesSection = ({ onSelectPackage }: ServicesSectionProps) => {
  const monthlyPackages = [
    {
      title: "Starter",
      minDeposit: "Rp 200.000",
      dailyReturn: "Rp 8.000",
      period: "30 hari",
      totalReturn: "Rp 240.000",
      roi: "20%",
      popular: false
    },
    {
      title: "Growth",
      minDeposit: "Rp 500.000",
      dailyReturn: "Rp 20.000",
      period: "30 hari",
      totalReturn: "Rp 600.000",
      roi: "20%",
      popular: true
    },
    {
      title: "Premium",
      minDeposit: "Rp 1.000.000",
      dailyReturn: "Rp 50.000",
      period: "30 hari",
      totalReturn: "Rp 1.500.000",
      roi: "50%",
      popular: false
    }
  ];

  const expressPackages = [
    {
      title: "Express Pro",
      minDeposit: "Rp 500.000",
      dailyReturn: "Rp 86.000",
      period: "7 hari",
      totalReturn: "Rp 602.000",
      roi: "20%",
      popular: false
    },
    {
      title: "Express Max",
      minDeposit: "Rp 1.000.000",
      dailyReturn: "Rp 215.000",
      period: "7 hari",
      totalReturn: "Rp 1.505.000",
      roi: "51%",
      popular: true
    }
  ];

  const PackageCard = ({ pkg, isExpress = false }: { pkg: any; isExpress?: boolean }) => (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-elegant ${
      pkg.popular ? 'ring-2 ring-primary shadow-glow' : 'hover:shadow-card'
    }`}>
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary-light text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
          <Star className="w-3 h-3 inline mr-1" />
          Populer
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            {isExpress && <Zap className="w-5 h-5 text-orange-500" />}
            {!isExpress && <Clock className="w-5 h-5 text-primary" />}
            {pkg.title}
          </CardTitle>
          <Badge variant={pkg.popular ? "default" : "outline"}>
            ROI {pkg.roi}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">{pkg.minDeposit}</div>
          <div className="text-sm text-muted-foreground">Minimum deposit</div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Return harian:</span>
            <span className="font-semibold text-green-600">{pkg.dailyReturn}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Periode:</span>
            <span className="font-semibold">{pkg.period}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Total return:</span>
            <span className="font-bold text-primary">{pkg.totalReturn}</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Withdraw kapan saja</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Return otomatis harian</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Support 24/7</span>
            </li>
            {isExpress && (
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500" />
                <span>Return dipercepat</span>
              </li>
            )}
          </ul>
        </div>
        
        <Button 
          className={`w-full ${
            pkg.popular 
              ? 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary' 
              : 'bg-gradient-to-r from-muted to-secondary hover:from-primary/20 hover:to-primary-light/20'
          }`}
          onClick={onSelectPackage}
        >
          Pilih Paket
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Paket Investasi DigiMax
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih paket investasi yang sesuai dengan profil risiko dan target return Anda. 
            Semua paket dirancang untuk memberikan hasil optimal dengan manajemen risiko terbaik.
          </p>
        </div>

        {/* Monthly Packages */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Paket Bulanan
            </h3>
            <p className="text-muted-foreground">Investasi jangka panjang dengan return stabil selama 30 hari</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Express Packages */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-orange-500" />
              Paket Express
            </h3>
            <p className="text-muted-foreground">Return tinggi dalam waktu singkat untuk investor berpengalaman</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expressPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} isExpress />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> Semua perhitungan return di atas adalah proyeksi berdasarkan performa historis. 
              Investasi selalu mengandung risiko. Pastikan Anda memahami risiko sebelum berinvestasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};