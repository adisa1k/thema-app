
import React from "react";
import { type YearlyAnalysis } from "./types";

interface Props {
  data: YearlyAnalysis[];
  investment: number;
}

 const FinancialSummary = ({ data, investment }: Props) => {
  const totalRevenue = data[data.length - 1].cumulativeRevenue;
  const totalProfit = totalRevenue - investment - data.reduce((acc, d) => acc + d.maintenance, 0);

  const paybackIndex = data.findIndex((d) => d.cumulativeRevenue >= investment);
  const paybackYear = paybackIndex !== -1 ? data[paybackIndex].year : null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8 max-w-3xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">📘 Finansijski sažetak</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base">
        <div className="flex flex-col">
          <span className="text-gray-500">Procijenjeni troškovi</span>
          <span className="font-semibold text-gray-800">
            {investment.toLocaleString("bs-BA")} KM
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Ukupan prihod</span>
          <span className="font-semibold text-green-700">
            {totalRevenue.toLocaleString("bs-BA", { maximumFractionDigits: 0 })} KM
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Profit nakon 25 godina</span>
          <span className={`font-semibold ${totalProfit < 0 ? "text-red-600" : "text-green-700"}`}>
            {totalProfit.toLocaleString("bs-BA", { maximumFractionDigits: 0 })} KM
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-500">Povrat investicije</span>
          <span className="font-semibold text-blue-600">
            {paybackYear ? `${paybackYear}. godina` : "Nema povrata"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default FinancialSummary