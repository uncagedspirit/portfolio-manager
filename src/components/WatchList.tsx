import { TrendingUp, TrendingDown, Plus } from "lucide-react";

const watchlistData = [
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.50, change: 12.30, changePercent: 5.2 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3234.12, change: -45.67, changePercent: -1.4 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2845.67, change: 23.45, changePercent: 0.8 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 456.78, change: 15.23, changePercent: 3.4 },
  { symbol: 'META', name: 'Meta Platforms', price: 387.45, change: -8.92, changePercent: -2.3 },
];

const WatchList = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Watchlist</h2>
        <button className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Stock</span>
        </button>
      </div>
      
      <div className="space-y-3">
        {watchlistData.map((stock, index) => {
          const isPositive = stock.change >= 0;
          return (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-semibold text-foreground">{stock.symbol}</p>
                  <p className="text-sm text-muted-foreground">{stock.name}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                <div className="flex items-center space-x-1">
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-danger" />
                  )}
                  <span className={`text-sm ${isPositive ? 'text-success' : 'text-danger'}`}>
                    {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;