export function formatChartData(timeSeries: any): any[] {
    let data = [], stock: any;
    for (var ts in timeSeries) {
        stock = timeSeries[ts];

        data.push([
            new Date(ts).getTime(),
            parseFloat(stock["1. open"]),
            parseFloat(stock["2. high"]),
            parseFloat(stock["3. low"]),
            parseFloat(stock["4. close"])
        ]);
    }
    return data.reverse();
}