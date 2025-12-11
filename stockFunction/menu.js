import readline, { question, questionInt } from "readline-sync";
import {
  searchStock,
  filterStocksByPrice,
  OperateOnStock,
  checkUserChooseString,
  checkUserChooseToBool,
} from "./function.js";

export function UserMenu() {
  let notExit = true;
  while (notExit) {
    const userChoose = readline.questionInt(
      "choose 1 to Search for a stock by name or id\nchoose 2 to Show all stocks above or below a given price\nchoose 3 to Buy or sell a stock \nchoose 4 to Exit"
    );
    let identifier;
    switch (userChoose) {
      case 1:
        identifier = readline.question("choose identifier stock");
        console.log(searchStock(identifier));
        break;
      case 2:
        const givenPrice = readline.questionInt("choose price");
        const aboveChoose = readline.questionInt(
          "write 1 to upper on price you choose or another number to less on price you choose"
        );
        const above = checkUserChooseToBool(aboveChoose);

        console.log(filterStocksByPrice(givenPrice, above));

        break;
      case 3:
        const operationChoose = readline.questionInt(
          "choose 1 to buy or another nuber to sell"
        );
        const operation = checkUserChooseString(operationChoose);
        identifier = readline.question("choose identifier");
        OperateOnStock(operation, identifier);
        console.log("stock update");

        break;
      case 4:
        console.log("by by");
        notExit = false;
        break;
    }
  }
  return;
}
