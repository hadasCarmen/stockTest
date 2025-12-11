import { stockMarket } from "../data/data.js";
import {searchStockByCategory} from './function.js'
function analyzeMarketTrends() {}

function topIncreasingStocks() {
  const relevantStock = stockWithHistory();
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

function stockWithHistory() {
  return stockMarket.stocks.filter((stock) => {
    return stock.previousPrices.length > 0;
  });
}
// console.log(stockWithHistory());

function topDecreasingStocks() {
  const relevantStock = stockWithHistory();
  const getTopStock = () => {
    return relevantStock.reduce(
      (maxOverall, stock) =>
        Math.min(
          maxOverall,
          stock.previousPrices[stock.previousPrices.length - 1] -
            stock.previousPrices[0]
        ),
      0
    );
  };
  return getTopStock();
}

function mostVolatileStock() {
  const relevantStock = stockWithHistory();
  const lessVolatileStock = () => {
    return relevantStock.reduce(
      (maxOverall, stock) => Math.min(maxOverall, stock.previousPrices.length),
      0
    );
  };
  const mostVolatileStock1 = () => {
    return relevantStock.reduce(
      (maxOverall, stock) => Math.max(maxOverall, stock.previousPrices.length),
      0
    );
  };
  return lessVolatileStock(), mostVolatileStock1();
}
function categoryStability(category) {
    const array =searchStockByCategory(category)
    const avg=getAverage(array)
  return {
    category: category,
    avg:avg
  };
}

function getAverage(array) {
  return (
    array.reduce((sum, stock) => sum + player.previousPrices.length, 0) / array.length
  );
}
