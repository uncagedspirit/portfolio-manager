import { TrendingUp, TrendingDown, Bell, Settings, User } from "lucide-react";

interface PortfolioHeaderProps {
  totalValue: number;
  dailyChange: number;
  dailyChangePercent: number;
}

const PortfolioHeader = ({ totalValue, dailyChange, dailyChangePercent }: PortfolioHeaderProps) => {
  const isPositive = dailyChange >= 0;

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Investor</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <p className="text-3xl font-bold text-foreground">
                ${totalValue.toLocaleString()}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              {isPositive ? (
                <TrendingUp className={`h-5 w-5 text-success`} />
              ) : (
                <TrendingDown className={`h-5 w-5 text-danger`} />
              )}
              <div>
                <p className={`text-lg font-semibold ${isPositive ? 'text-success' : 'text-danger'}`}>
                  {isPositive ? '+' : ''}${dailyChange.toLocaleString()}
                </p>
                <p className={`text-sm ${isPositive ? 'text-success' : 'text-danger'}`}>
                  {isPositive ? '+' : ''}{dailyChangePercent.toFixed(2)}% today
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <User className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;