import React from 'react'
import { type YearlyAnalysis } from './types';

interface Props {
    data: YearlyAnalysis[];
}

 const FinancialAnalysisTable = ({data}: Props) => {

    // Zbirne vrijednosti za dno tabele

    const totalProduction = data.reduce((acc, d) => acc + d.production, 0);
    const totalRevenue = data.reduce((acc, d) => acc + d.revenue, 0);
    const totalMaintenance = data.reduce((acc, d) => acc + d.maintenance, 0);

  return (
    <div className='overflow-x-auto mt-8'>
        <table className='min-w-full border border-gray-300 text-sm bg-white shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-gradient-to-r from-green-100 to-green-200 text-gray-800 font-semibold'>
                <tr>
                    <th className='p-2 border'>Godina</th>
                    <th className='p-2 border'>Godisnja<br /> proizvodnja <br />(kWh)</th>
                    <th className='p-2 border'>Kumulativna<br /> proizvodnja <br />(kWh)</th>
                    <th className='p-2 border'>Cijena<br /> (KM/kWh)</th>
                    <th className='p-2 border'>Prihod<br /> godisnji (KM)</th>
                    <th className='p-2 border'>Kumulativni <br />prihod (KM)</th>
                    <th className='p-2 border'>Odrzavanje <br />(KM)</th>
                    <th className='p-2 border'>Tok <br />novca (KM)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.year} className='text-center border-t hover:bg-gray-50 transition-colors'>
                        <td className='p-2 border font-semibold'>{row.year}</td>
                        <td className='p-2 border'>{row.production.toFixed(0)}</td>
                        <td className='p-2 border text-gray-700'>{row.cumulativeProduction.toFixed(0)}</td>
                        <td className='p-2 border'>{row.price.toFixed(3)}</td>
                        <td className='p-2 border text-green-700 font-medium'>{row.revenue.toFixed(0)}</td>
                        <td className='p-2 border text-gray-800'>{row.cumulativeRevenue.toFixed(0)}</td>
                        <td className='p-2 border text-amber-700 font-medium'>{row.maintenance.toFixed(0)}</td>
                        <td className={`font-semibold p-2 border ${row.cashFlow < 0 ? 'text-red-600' : 'text-green-600'}`}>{row.cashFlow.toFixed(0)}</td>
                    </tr>
                ))}

                {/* Zbirni red */}

                <tr className='bg-green-100 font-bold text-gray-900 border-t-2 border-green-300'>
                    <td className='p-2 border text-center'>Ukupno</td>
                    <td className='p-2 border'>{totalProduction.toFixed(0)}</td>
                    <td className='p-2 border'>-</td>
                    <td className='p-2 border'>-</td>
                    <td className='p-2 border'>{totalRevenue.toFixed(0)}</td>
                    <td className='p-2 border'>-</td>
                    <td className='p-2 border'>{totalMaintenance.toFixed(0)}</td>
                    <td className='p-2 border'>-</td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default FinancialAnalysisTable;


