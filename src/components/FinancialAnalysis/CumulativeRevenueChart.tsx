import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { type YearlyAnalysis } from './types'

interface Props {
    data: YearlyAnalysis[];
}

const CumulativeRevenueChart = ({data}: Props) => {
    const investment = 68143

    // Nadjemo godinu kada kumulativni prihod premasi investiciju
    const paybackIndex = data.findIndex((d) => d.cumulativeRevenue >= investment);
    const paybackYear = paybackIndex !== -1 ? data[paybackIndex].year : null;

  return (
    <div className='mt-10 w-full h-96 bg-white p-6 shadow-md rounded-lg'>
                <h2 className='text-xl font-semibold mb-4'>Kumulativni prihod kroz godine</h2>
                <ResponsiveContainer  width='100%' height='100%'>
                    <LineChart data={data} className='pb-6'>
                        <CartesianGrid strokeDasharray='3 3'/>
                        <XAxis  dataKey='year' className='pb-6' label={{ className: 'text-semibold', value: 'Godina', position: 'insideBottomRight', offset: -5 }}/>
                        <YAxis label={{ value: 'KM', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip formatter={(value: number) => value.toLocaleString('bs-BA', { maximumFractionDigits: 0 }) + ' KM'}/>
                        
                        <Legend />

                        {/* Linija kumulativnog prihoda */}
                        <Line type='monotone' dataKey='cumulativeRevenue' name='Kumulativni prihod' stroke='#16a34a' strokeWidth={2.5} dot={false}/>

                        {/* Horizontalna linija za iznos investicije */}
                        <ReferenceLine  y={investment} stroke='#f97316'
                                                strokeDasharray='4 4'
                                                label={{
                                                    value: 'Investicija',
                                                    position: 'right',
                                                    fill: '#f97316',
                                                    fontSize: 12,
                                                }}/>

                        {/* Vertikalna linija za godinu povrata */}

                        {paybackYear && (
                            <ReferenceLine 
                                x={paybackYear}
                                stroke='#2563eb'
                                strokeDasharray='4 4'
                                label={{ value: `Povrat investicije (${paybackYear}. godina)`,
                            position: 'top',
                            fill: '#2563eb',
                            fontSize: 12,
                        }}/>
                        )}


                        
        
                    </LineChart>
                </ResponsiveContainer>
                    
                
              
            </div>
  )
}

export default CumulativeRevenueChart
