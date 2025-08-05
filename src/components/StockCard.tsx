import { TrendingUp, TrendingDown } from "lucide-react";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  shares: number;
  value: number;
}

const StockCard = ({ symbol, name, price, change, changePercent, shares, value }: StockCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-bold text-foreground text-lg">{symbol}</h3>
          <p className="text-muted-foreground text-sm">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-foreground">${price.toFixed(2)}</p>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-danger" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shares:</span>
          <span className="text-foreground font-medium">{shares}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Market Value:</span>
          <span className="text-foreground font-semibold">${value.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Daily P&L:</span>
          <span className={`font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? '+' : ''}${(change * shares).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StockCard;