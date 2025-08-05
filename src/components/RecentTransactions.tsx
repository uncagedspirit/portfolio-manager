import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  { type: 'buy', symbol: 'AAPL', shares: 50, price: 175.30, total: 8765, date: '2024-01-12 09:30' },
  { type: 'sell', symbol: 'MSFT', shares: 25, price: 412.50, total: 10312.50, date: '2024-01-11 14:15' },
  { type: 'buy', symbol: 'GOOGL', shares: 10, price: 2845.67, total: 28456.70, date: '2024-01-11 11:45' },
  { type: 'sell', symbol: 'TSLA', shares: 15, price: 248.50, total: 3727.50, date: '2024-01-10 16:20' },
  { type: 'buy', symbol: 'NVDA', shares: 30, price: 456.78, total: 13703.40, date: '2024-01-10 10:10' },
];

const RecentTransactions = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Recent Transactions</h2>
        <button className="text-primary hover:text-primary/80 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                transaction.type === 'buy' ? 'bg-success/20' : 'bg-danger/20'
              }`}>
                {transaction.type === 'buy' ? (
                  <ArrowDownLeft className={`h-4 w-4 text-success`} />
                ) : (
                  <ArrowUpRight className={`h-4 w-4 text-danger`} />
                )}
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    transaction.type === 'buy' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-danger/20 text-danger'
                  }`}>
                    {transaction.type.toUpperCase()}
                  </span>
                  <span className="font-semibold text-foreground">{transaction.symbol}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {transaction.shares} shares @ ${transaction.price.toFixed(2)}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-semibold text-foreground">
                ${transaction.total.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(transaction.date).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;