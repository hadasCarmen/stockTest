import { stockMarket } from "../data/data.js";
import readline from "readline-sync";

export function searchStock(identifier) {
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

export function filterStocksByPrice(givenPrice, above) {
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

export function OperateOnStock(operation, identifier) {
  const stockSearching = searchStock(identifier);
  const category = stockSearching.category;
  const allCategori = searchStockByCategory(category);
  let userChoose;

  userChoose = readline.questionInt("how much many you want effect");

  if (operation === "buy") {
    stockSearching.forEach((stock) => {
        while (userChoose>stock.availableStocks) {
          userChoose = readline.questionInt("how much many you want effect choose less");
        }
      stock.availableStocks -= userChoose;
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
      stock.availableStocks += userChoose;
    });
    allCategori.forEach((stock) => {
      if (stock.name === identifier || stock.id === identifier) {
        stock.currentPrice *= 0.95;
      } else {
        stock.currentPrice *= 0.99;
      }
    });
    updadeLastUpdate();
  }
  //   console.log(stockMarket);
  //   console.log(category);
  //   console.log(allCategori);
}
// OperateOnStock("sell", "x7l2df9");

function updadeLastUpdate() {
  stockMarket.lastUpdated = new Date();
  // return stockMarket.lastUpdated
}
// console.log(updadeLastUpdate());

export function checkUserChooseToBool(above) {
  if (above === 1) {
    return true;
  } else {
    return false;
  }
}

export function checkUserChooseString(operationChoose) {
  if (operationChoose === 1) {
    return "buy";
  } else {
    return "sell";
  }
}
