
import React from "react";
import { type YearlyAnalysis } from "./types";

interface Props {
  data: YearlyAnalysis[];
  investment: number;
}

 const FinancialSummary = ({ data, investment }: Props) => {
  if (!data || data.length === 0) return null;

  //Ukupan prihod je kumulativni prihod zadnje godine
  const totalRevenue = data[data.length - 1].cumulativeRevenue;

  // Ukupan trosak odrzavanja
  const totalMaintenance = data.reduce((sum, d) => sum + d.maintenance, 0);

  //Ukupan tok novca (sabira sve godine)
  const totalCashFlow = data.reduce((sum, d) => sum + d.cashFlow, 0);

  // Profit nakon 25 godina (tok novca vec ukljucuje investiciju)
  const totalProfit = totalCashFlow;

  // Godina povrata investicije (kad kumulativni prihod >= investicija)
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
          <span className="text-gray-500">Profit nakon {data.length} godina</span>
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
      <div className="mt-4 text-gray-500 text-sm">
        <p>
          Odrzavanje ukupno: {" "}
          <strong>{totalMaintenance.toLocaleString("bs-BA")} KM</strong>
        </p>

      </div>
    </div>
  );
};
export default FinancialSummary