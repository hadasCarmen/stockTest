import { stockMarket } from "../data/data.js";

function analyzeMarketTrends() {}

function topIncreasingStocks() {
    const relevantStock=stockWithHistory()
  const getTopStock = () => {
    
      return relevantStock.reduce(
        (maxOverall, stock) =>
          Math.max(
            maxOverall,
            stock.previousPrices[stock.previousPrices.length - 1] -
              stock.previousPrices[0]
          ),
        0
      );
    
  };
  return getTopStock();
}

// console.log(topIncreasingStocks());

function stockWithHistory(){
    return stockMarket.stocks.filter(stock => { return stock.previousPrices.length>0});
}
// console.log(stockWithHistory());
