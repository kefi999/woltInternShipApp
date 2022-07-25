import React, { useEffect, useContext, useState } from "react";
import {
  INITIAL_VALUE,
  STRING_DAY,
  TIME_RN,
  MAX_FEE,
  WEEK,
} from "../helper/Helper";
import { ContextOne } from "../App";
function OverallResult() {
  const [rerender, setRerender] = useState(false);

  const contextVal = useContext(ContextOne);
  const D = String(new Date(contextVal.state.date_time).getDate()).padStart(
    2,
    "0"
  );
  const M = String(
    new Date(new Date(contextVal.state.date_time)).getMonth() + 1
  ).padStart(2, "0"); //January is 0!
  const Y = new Date(new Date(contextVal.state.date_time)).getFullYear();
  const chosenDay = WEEK[new Date(contextVal.state.date_time).getDay()];
  const timeRN = new Date(contextVal.state.date_time).getHours();

  useEffect(() => {
    if (
      contextVal.state.cartValue != "" ||
      contextVal.state.deliveryDistance != "" ||
      contextVal.state.amountOfItemsValue != ""
    ) {
      contextVal.state.totalFee =
        contextVal.state.surchargeFee +
        contextVal.state.distanceFee +
        contextVal.state.containerFee;
    }
    if (chosenDay === "Friday" && timeRN > 15 && timeRN < 19) {
      contextVal.state.totalFee = contextVal.state.totalFee * 1.1;
    }
    if (contextVal.state.totalFee > 15) {
      contextVal.state.totalFee = 15;
    }

    setRerender(!rerender);
  }, [contextVal.state.click]);
  return (
    <div>
      <h1>Delivery price : {Math.round(contextVal.state.totalFee)}</h1>
    </div>
  );
}
export default OverallResult;
