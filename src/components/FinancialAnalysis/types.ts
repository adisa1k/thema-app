export interface InputData {
    annualProduction: number;
    productionDecrease: number;
    initialPrice: number;
    priceIncrease: number;
    investment: number;
    maintenanceFirst10: number;
    maintenanceAfter10: number;
    years: number;
}

export interface YearlyAnalysis {
    year: number;
    production: number;
    cumulativeProduction: number;
    price: number;
    revenue: number;
    cumulativeRevenue: number;
    maintenance: number;
    cashFlow: number;
}