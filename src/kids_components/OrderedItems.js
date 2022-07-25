import React, { useEffect, useContext } from "react";
import { NORMAL_ITEMS } from "../helper/Helper";
import { ContextOne } from "../App";

function OrderedItems() {
  const contextVal = useContext(ContextOne);

  useEffect(() => {
    contextVal.state.containerFee =
      contextVal.state.amountOfItemsValue <= NORMAL_ITEMS
        ? 0
        : Math.abs(NORMAL_ITEMS - contextVal.state.amountOfItemsValue) * 0.5;

    console.log(contextVal.state.totalFee);
  }, [contextVal.state.amountOfItemsValue]);

  return (
    <div>
      <label htmlFor="amountOfItems">Amount of items:</label>
      <input
        value={
          contextVal.state.amountOfItemsValue === 0
            ? ""
            : contextVal.state.amountOfItemsValue
        }
        type="number"
        id="amountOfItems"
        className="amountOfItems"
        onChange={(e) =>
          contextVal.dispatch({
            type: "calcContainerValue",
            value: e.target.value,
          })
        }
      ></input>
    </div>
  );
}
export default OrderedItems;
