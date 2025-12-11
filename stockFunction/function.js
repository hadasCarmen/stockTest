import { stockMarket } from "../data/data.js";
import readline from "readline-sync";

function searchStock(identifier) {
  const stockSearching = stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );
  if (stockSearching.length === 0) {
    console.log("no match");
  }
  return stockSearching;
}

function searchStockByCategory(identifier) {
  const stockSearching = stockMarket.stocks.filter(
    (stock) => stock.category === identifier
  );
  return stockSearching;
}
// console.log(searchStockByCategory("education"));

// console.log(stockMarket.stocks);
// console.log(searchStock("x7l2df9"));

function filterStocksByPrice(givenPrice, above) {
  let stockFilter;
  if (typeof givenPrice === "number") {
    if (above) {
      stockFilter = stockMarket.stocks.filter(
        (stock) => stock.currentPrice > givenPrice
      );
    } else {
      stockFilter = stockMarket.stocks.filter(
        (stock) => stock.currentPrice < givenPrice
      );
    }
    return stockFilter;
  } else {
    console.log("you need give price number");
    return [];
  }
}

// console.log(filterStocksByPrice(77, true));

function OperateOnStock(operation, identifier) {
  const stockSearching = searchStock(identifier);
  const category = stockSearching[0].category;
  const allCategori = searchStockByCategory(category);
  let userChoose;

  userChoose = readline.questionInt("how much many you want effect");

  if (operation === "buy") {
    stockSearching.forEach((stock) => {
      stock.availableStocks += userChoose;
    });
    allCategori.forEach((stock) => {
      if (stock.name === identifier || stock.id === identifier) {
        stock.currentPrice *= 1.05;
      } else {
        stock.currentPrice *= 1.01;
      }
    });
  } else if (operation === "sell") {
    stockSearching.forEach((stock) => {
      stock.availableStocks -= userChoose;
    });
    allCategori.forEach((stock) => {
      if (stock.name === identifier || stock.id === identifier) {
        stock.currentPrice *= 0.95;
      } else {
        stock.currentPrice *= 0.99;
      }
    });
  }
//   console.log(stockMarket);
//   console.log(category);
//   console.log(allCategori);
}
// OperateOnStock("sell", "x7l2df9");
