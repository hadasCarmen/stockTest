import { stockMarket } from "../data/data.js";
// import readline from "readline-sync";

function searchStock(identifier) {
  const stockSearching = stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );

  return stockSearching;
}

// console.log(stockMarket.stocks);
console.log(searchStock("x7l2df9"));
