import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '1/1', value: 125000 },
  { date: '1/2', value: 127500 },
  { date: '1/3', value: 124800 },
  { date: '1/4', value: 128900 },
  { date: '1/5', value: 131200 },
  { date: '1/8', value: 129800 },
  { date: '1/9', value: 133400 },
  { date: '1/10', value: 135600 },
  { date: '1/11', value: 132900 },
  { date: '1/12', value: 138750 },
];

const PortfolioChart = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Portfolio Performance</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm rounded-md bg-primary text-primary-foreground">1W</button>
          <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:bg-secondary">1M</button>
          <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:bg-secondary">3M</button>
          <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:bg-secondary">1Y</button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--primary-glow))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;