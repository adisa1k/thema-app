import { useState } from "react";
import { type InputData } from "./types";

interface Props {
    onSubmit: (data: InputData) => void;
}

 const FinancialAnalysisForm = ({ onSubmit }: Props) => {
    const [formData, setFormData] = useState<InputData>({
        annualProduction: 46516,
        productionDecrease: 1.5,
        initialPrice: 0.166,
        priceIncrease: 2.5,
        investment: 68143,
        maintenanceFirst10: 1000,
        maintenanceAfter10: 1500,
        years: 25

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: parseFloat(e.target.value)
        });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);

            }}
            className="grid grid-cols-2 gap-4 bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto">
            
            {Object.keys(formData).map((key) => (
                <div key={key} className="flex flex-col">
                    <label className="text-sm font-semibold mb-1">{key}</label>
                    <input 
                        name={key}
                        type="number"
                        step="any"
                        value={formData[key as keyof InputData]}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
            ))}
            <button
                type="submit"
                className="col-span-2 mt-4 bg-green-600 text-black font-semibold py-2 rounded-md hover:bg-green-700">Izracunaj</button>

        </form>
    )
}

export default FinancialAnalysisForm;