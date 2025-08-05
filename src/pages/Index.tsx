import PortfolioHeader from "@/components/PortfolioHeader";
import MetricsCards from "@/components/MetricsCards";
import PortfolioChart from "@/components/PortfolioChart";
import AssetAllocation from "@/components/AssetAllocation";
import StockCard from "@/components/StockCard";
import WatchList from "@/components/WatchList";
import RecentTransactions from "@/components/RecentTransactions";
import MarketNews from "@/components/MarketNews";

const portfolioStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.30, change: 2.45, changePercent: 1.42, shares: 100, value: 17530 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 412.50, change: -5.20, changePercent: -1.24, shares: 75, value: 30937.50 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2845.67, change: 23.45, changePercent: 0.83, shares: 25, value: 71141.75 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3234.12, change: -45.67, changePercent: -1.39, shares: 15, value: 48511.80 },
];

const Index = () => {
  const totalValue = 138750;
  const dailyChange = 2250;
  const dailyChangePercent = 1.65;

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader 
        totalValue={totalValue}
        dailyChange={dailyChange}
        dailyChangePercent={dailyChangePercent}
      />
      
      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <MetricsCards />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <PortfolioChart />
          </div>
          
          {/* Asset Allocation */}
          <div>
            <AssetAllocation />
          </div>
        </div>
        
        {/* Portfolio Holdings */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Your Holdings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioStocks.map((stock, index) => (
              <StockCard key={index} {...stock} />
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Watchlist */}
          <div>
            <WatchList />
          </div>
          
          {/* Recent Transactions */}
          <div>
            <RecentTransactions />
          </div>
          
          {/* Market News */}
          <div>
            <MarketNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;