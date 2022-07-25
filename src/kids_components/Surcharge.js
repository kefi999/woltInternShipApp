import React, { useEffect, useContext } from "react";
import { MIN_SUR_VALUE, INITIAL_VALUE, FREE_SHIPPING } from "../helper/Helper";
import { ContextOne } from "../App";
function Surcharge() {
  const contextVal = useContext(ContextOne);

  useEffect(() => {
    if (contextVal.state.cartValue <= FREE_SHIPPING) {
      if (contextVal.state.cartValue < MIN_SUR_VALUE) {
        contextVal.state.surchargeFee =
          MIN_SUR_VALUE - contextVal.state.cartValue;
      } else {
        contextVal.state.surchargeFee = INITIAL_VALUE;
      }
    } else {
      contextVal.state.surchargeFee = INITIAL_VALUE;
    }

    console.log("props.cartvalue :" + contextVal.state.surchargeFee);
  }, [contextVal.state.cartValue, contextVal.state.surchargeFee]);
  return (
    <div>
      <label htmlFor="cartValue">Cart value:</label>
      <input
        value={
          contextVal.state.cartValue === 0 ? "" : contextVal.state.cartValue
        }
        type="number"
        id="cartValue"
        className="cartValue"
        onChange={(e) =>
          contextVal.dispatch({
            type: "calcCartValue",
            value: e.target.value,
          })
        }
      ></input>
    </div>
  );
}

export default Surcharge;

// props.cartValue <= FREE_SHIPPING
//   ? props.cartValue < MIN_SUR_VALUE
//     ? changeTotalSurcharge(MIN_SUR_VALUE - props.cartValue)
//     : changeTotalSurcharge(INITIAL_VALUE)
//   : changeTotalSurcharge(INITIAL_VALUE);
