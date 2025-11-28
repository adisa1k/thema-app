import { type InputData, type YearlyAnalysis } from "../components/FinancialAnalysis/types";

export function calculateTable(input: InputData): YearlyAnalysis[] {
    const {
        annualProduction,
        productionDecrease,
        initialPrice,
        priceIncrease,
        investment,
        maintenanceFirst10,
        maintenanceAfter10,
        years
    } = input;

    const results: YearlyAnalysis[] = [];
    let cumulativeProduction = 0;
    let cumulativeRevenue = 0;

    for (let year = 1; year <= years; year++) {
        const production = annualProduction * Math.pow(1 - productionDecrease / 100, year - 1);
        cumulativeProduction += production;

        const price = initialPrice * Math.pow(1 + priceIncrease / 100, year - 1);
        const revenue = production * price;
        cumulativeRevenue += revenue;

        const maintenance = year <= 10 ? maintenanceFirst10 : maintenanceAfter10;

        // kumulativni tok novca pokazuje kada se investicija isplatila
        let cashFlow: number;
        if (year === 1) {
            cashFlow = revenue - maintenance - investment;
        } else {
            const previousCashFlow = results[year - 2].cashFlow; //prethodna godina
            cashFlow = previousCashFlow + (revenue - maintenance);
        }

        results.push({
            year,
            production,
            cumulativeProduction,
            price,
            revenue,
            cumulativeRevenue,
            maintenance,
            cashFlow
        });
    }
    return results;
}