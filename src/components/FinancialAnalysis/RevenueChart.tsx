import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { type YearlyAnalysis } from './types'
import ExportToPDF from './ExportToPDF';

interface Props {
    data: YearlyAnalysis[];
}

const RevenueChart = ({data}: Props) => {
  return (
    <div className='mt-10 w-full h-96 bg-white p-6 shadow-md rounded-lg'>
        <div id="revenue-chart" className="w-full h-72">

            <h2 className='text-xl font-semibold mb-4'>Prihod i troškovi odrzavanja po godinama</h2>
            <ResponsiveContainer  width='100%' height='100%'>
                <LineChart data={data} className='pb-6'>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <XAxis  dataKey='year' className='pb-6' label={{ className: 'text-semibold', value: 'Godina', position: 'insideBottomRight', offset: -5 }}/>
                    <YAxis label={{ value: 'KM', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip formatter={(value: number) => value.toLocaleString('bs-BA', { maximumFractionDigits: 0 }) + ' KM'}/>
                    
                    <Legend />
                    <Line type='monotone' dataKey='revenue' name='Prihod' stroke='#2563eb' strokeWidth={2} dot={false}/>
                    <Line type='monotone' dataKey='maintenance' name='Odrzavanje' stroke='#f97316' strokeWidth={2} dot={false}/>
    
                </LineChart>
            </ResponsiveContainer>
            </div>

            <ExportToPDF targetId="revenue-chart" fileName='prihod'/>    
            
          
        </div>
  )
}

export default RevenueChart
