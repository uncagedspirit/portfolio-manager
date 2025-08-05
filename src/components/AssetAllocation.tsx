import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Technology', value: 45, color: '#3B82F6' },
  { name: 'Healthcare', value: 20, color: '#10B981' },
  { name: 'Finance', value: 15, color: '#F59E0B' },
  { name: 'Energy', value: 12, color: '#EF4444' },
  { name: 'Consumer', value: 8, color: '#8B5CF6' },
];

const AssetAllocation = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">Asset Allocation</h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
              formatter={(value: number) => [`${value}%`, 'Allocation']}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{ color: 'hsl(var(--foreground))' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-foreground">{item.name}</span>
            </div>
            <span className="text-muted-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetAllocation;