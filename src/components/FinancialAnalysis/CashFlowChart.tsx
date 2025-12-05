
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { type YearlyAnalysis } from "./types";
import ExportToPDF from "./ExportToPDF";

interface Props {
  data: YearlyAnalysis[];
}

 const CashFlowChart = ({ data }: Props) => {
  return (
    <div  className="mt-10 w-full h-96 bg-white p-6 shadow-md rounded-lg">
      <div id="cashflow-chart" className="w-full h-72">

      

      
      <h2 className="text-xl font-semibold mb-4">Tok novca po godinama</h2>

      <ResponsiveContainer width="100%" height="100%" className="p-7">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis
            dataKey="year"
            label={{
              value: "Godina",
              position: "insideBottomRight",
              offset: -5,
            }}
          />
          <YAxis
            label={{ value: "KM", angle: -90, position: "insideLeft"  }}
          />
          <Tooltip
            formatter={(value: number) =>
              value.toLocaleString("bs-BA", {
                maximumFractionDigits: 0,
              }) + " KM"
            }
          />
          <ReferenceLine y={0} stroke="#9ca3af" strokeDasharray="3 3" />

          {/* Jedna linija - zelena */}
          <Line
            type="monotone"
            dataKey="cashFlow"
            stroke="#22c55e"
            strokeWidth={2.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
      </div>

      <ExportToPDF 
          targetId="cashflow-chart" 
          fileName="tok-novca"
          />

      
        
    </div>
  );
};

export default CashFlowChart