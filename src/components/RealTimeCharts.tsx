import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const RealTimeCharts = () => {
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "BINANCE:BTCUSDT",
      "interval": "1",
      "timezone": "Asia/Jakarta",
      "theme": "light",
      "style": "1",
      "locale": "id",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "container_id": "tradingview_btc"
    });
    
    const btcContainer = document.getElementById('tradingview_btc');
    if (btcContainer) {
      btcContainer.appendChild(script);
    }

    // Load Gold widget
    const goldScript = document.createElement('script');
    goldScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    goldScript.async = true;
    goldScript.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "OANDA:XAUUSD",
      "interval": "1",
      "timezone": "Asia/Jakarta", 
      "theme": "light",
      "style": "1",
      "locale": "id",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "save_image": false,
      "container_id": "tradingview_gold"
    });
    
    const goldContainer = document.getElementById('tradingview_gold');
    if (goldContainer) {
      goldContainer.appendChild(goldScript);
    }
  }, []);

  return (
    <section id="charts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Market Real-Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pantau pergerakan harga Bitcoin dan Emas secara real-time dengan data langsung dari TradingView
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bitcoin Chart */}
          <Card className="shadow-card border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">₿</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bitcoin</h3>
                  <p className="text-sm text-muted-foreground">BTC/USDT</p>
                </div>
              </div>
            </div>
            <CardContent className="p-0">
              <div className="tradingview-widget-container" style={{ height: "400px", width: "100%" }}>
                <div id="tradingview_btc" style={{ height: "100%", width: "100%" }}></div>
              </div>
            </CardContent>
          </Card>

          {/* Gold Chart */}
          <Card className="shadow-card border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🥇</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Emas</h3>
                  <p className="text-sm text-muted-foreground">XAU/USD</p>
                </div>
              </div>
            </div>
            <CardContent className="p-0">
              <div className="tradingview-widget-container" style={{ height: "400px", width: "100%" }}>
                <div id="tradingview_gold" style={{ height: "100%", width: "100%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Data real-time dari TradingView • Powered by DigiMax Analytics Engine
          </p>
        </div>
      </div>
    </section>
  );
};