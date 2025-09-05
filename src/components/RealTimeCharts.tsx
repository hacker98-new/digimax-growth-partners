import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ChartData {
  time: string;
  value: number;
}

interface AssetData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  data: ChartData[];
}

export const RealTimeCharts = () => {
  const [assets, setAssets] = useState<AssetData[]>([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 67250.45,
      change: 1234.56,
      changePercent: 1.87,
      data: []
    },
    {
      name: "Emas",
      symbol: "GOLD",
      price: 2087.34,
      change: -12.45,
      changePercent: -0.59,
      data: []
    }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const generateInitialData = () => {
      const data = [];
      for (let i = 23; i >= 0; i--) {
        const time = new Date();
        time.setHours(time.getHours() - i);
        data.push({
          time: time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          value: Math.random() * 100 + 50
        });
      }
      return data;
    };

    setAssets(prevAssets => 
      prevAssets.map(asset => ({
        ...asset,
        data: generateInitialData()
      }))
    );

    const interval = setInterval(() => {
      setAssets(prevAssets => 
        prevAssets.map(asset => {
          const newPrice = asset.price + (Math.random() - 0.5) * 100;
          const change = newPrice - asset.price;
          const changePercent = (change / asset.price) * 100;
          
          const newDataPoint = {
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            value: Math.random() * 100 + 50
          };

          return {
            ...asset,
            price: newPrice,
            change,
            changePercent,
            data: [...asset.data.slice(1), newDataPoint]
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="charts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Market Real-Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pantau pergerakan harga Bitcoin dan Emas secara real-time dengan teknologi terdepan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {assets.map((asset, index) => (
            <Card key={asset.symbol} className="shadow-card border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      asset.symbol === 'BTC' 
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                        : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    }`}>
                      <span className="text-white font-bold text-sm">
                        {asset.symbol === 'BTC' ? '₿' : '🥇'}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{asset.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={asset.changePercent >= 0 ? "default" : "destructive"}
                    className="flex items-center space-x-1"
                  >
                    {asset.changePercent >= 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    <span>{asset.changePercent >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%</span>
                  </Badge>
                </div>
                
                <div className="mt-4">
                  <div className="text-2xl font-bold">
                    ${asset.price.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-sm flex items-center space-x-1 ${
                    asset.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span>{asset.change >= 0 ? '+' : ''}${asset.change.toFixed(2)}</span>
                    <span>• 24j terakhir</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={asset.data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="time" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={asset.changePercent >= 0 ? "#22c55e" : "#ef4444"}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, stroke: asset.changePercent >= 0 ? "#22c55e" : "#ef4444" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Data diperbarui setiap 3 detik • Powered by DigiMax Analytics Engine
          </p>
        </div>
      </div>
    </section>
  );
};