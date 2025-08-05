import { Clock, TrendingUp } from "lucide-react";

const newsData = [
  {
    title: "Tesla Reports Record Q4 Deliveries, Beating Analyst Expectations",
    source: "MarketWatch",
    time: "2 hours ago",
    category: "earnings"
  },
  {
    title: "Federal Reserve Signals Potential Interest Rate Cuts in 2024",
    source: "Reuters",
    time: "4 hours ago",
    category: "monetary-policy"
  },
  {
    title: "NVIDIA's AI Chip Demand Continues to Surge Amid Growing Competition",
    source: "Bloomberg",
    time: "6 hours ago",
    category: "technology"
  },
  {
    title: "Oil Prices Rise on Geopolitical Tensions and Supply Concerns",
    source: "Wall Street Journal",
    time: "8 hours ago",
    category: "commodities"
  },
  {
    title: "Amazon Announces Major Investment in Cloud Infrastructure",
    source: "CNBC",
    time: "12 hours ago",
    category: "business"
  }
];

const MarketNews = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Market News</h2>
        <div className="flex items-center space-x-1 text-success">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {newsData.map((news, index) => (
          <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
            <h3 className="font-medium text-foreground hover:text-primary cursor-pointer transition-colors leading-snug mb-2">
              {news.title}
            </h3>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{news.source}</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{news.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 pt-4 border-t border-border text-primary hover:text-primary/80 text-sm font-medium">
        View More News
      </button>
    </div>
  );
};

export default MarketNews;