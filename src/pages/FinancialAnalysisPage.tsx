import React, { useState } from 'react'
import { type YearlyAnalysis, type InputData } from '../components/FinancialAnalysis/types'
import { calculateTable } from '../utils/calculations';
import  FinancialAnalysisForm  from '../components/FinancialAnalysis/FinancialAnalysisForm';
import  FinancialAnalysisTable  from '../components/FinancialAnalysis/FinancialAnalysisTable';
import  CashFlowChart  from '../components/FinancialAnalysis/CashFlowChart';
import RevenueChart from '../components/FinancialAnalysis/RevenueChart';
import CumulativeRevenueChart from '../components/FinancialAnalysis/CumulativeRevenueChart';
import FinancialSummary from '../components/FinancialAnalysis/FinancialSummary';
import ExportToPDF from '../components/FinancialAnalysis/ExportToPDF';

const FinancialAnalysisPage = () => {

  // cuvamo i rezultate i input (da mozemo proslijediti investment u grafove/summary)
    const [data, setData] = useState<YearlyAnalysis[] | null>(null);
    const [inputData, setInputData] = useState<InputData | null>(null);

    const handleSubmit = (input: InputData) => {
        const result = calculateTable(input);
        setData(result);
        setInputData(input);  //cuvamo input (sadrzi investment)
    };
  return (
    <div className='p-8'>
        <h1 className='text-2xl font-bold mb-6'>Finansijska analiza projekta</h1>
        <FinancialAnalysisForm onSubmit={handleSubmit}/>

        {/* Prikaz rezultata ako ih ima */}
        {data && inputData && (
          <>
          <FinancialAnalysisTable data={data} />
        <CashFlowChart data={data}/>
        <RevenueChart data={data}/>
        <CumulativeRevenueChart data={data} investment={inputData.investment} />
        <FinancialSummary data={data} investment={inputData.investment}/>

        {/* Rezultati analize */}
        <div className='mt-10 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto'>
          <h2 className='text-xl font-semibold mb-4'>Rezultati analize</h2>
          <p>
            <strong>Ukupan profit nakon {data.length} godina:</strong>
            {" "}
            <span className='text-green-700 font-semibold'>
              {data[data.length - 1].cashFlow.toLocaleString("bs-BA", {maximumFractionDigits: 0,

              })}{" "}
              KM
            </span>
          </p>

          <p>
            <strong>Povrat investicije:</strong>
            <span>
              {
                data.find((row) => row.cashFlow >= 0)?.year
                ? `Godina ${data.find((row) => row.cashFlow >= 0)?.year}`
                : "Nije postignut u analiziranom periodu"
              }
            </span>
          </p>
        </div>

              <ExportToPDF />
          </>
          )
        }
      


        

      
    </div>

  )
}

export default FinancialAnalysisPage;
