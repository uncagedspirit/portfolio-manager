import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Calendar } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, changeType = 'neutral', icon }: MetricCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        {change && (
          <div className="flex items-center space-x-1">
            {changeType === 'positive' ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : changeType === 'negative' ? (
              <TrendingDown className="h-4 w-4 text-danger" />
            ) : null}
            <span className={`text-sm font-medium ${
              changeType === 'positive' ? 'text-success' : 
              changeType === 'negative' ? 'text-danger' : 'text-muted-foreground'
            }`}>
              {change}
            </span>
          </div>
        )}
      </div>
      
      <div>
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  );
};

const MetricsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Gain/Loss"
        value="+$12,750"
        change="+8.5%"
        changeType="positive"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
      />
      
      <MetricCard
        title="Monthly Return"
        value="+5.2%"
        change="+1.3%"
        changeType="positive"
        icon={<BarChart3 className="h-5 w-5 text-primary" />}
      />
      
      <MetricCard
        title="Annual Target"
        value="78%"
        change="On track"
        changeType="neutral"
        icon={<Target className="h-5 w-5 text-primary" />}
      />
      
      <MetricCard
        title="Days to Rebalance"
        value="12 days"
        change="Upcoming"
        changeType="neutral"
        icon={<Calendar className="h-5 w-5 text-primary" />}
      />
    </div>
  );
};

export default MetricsCards;