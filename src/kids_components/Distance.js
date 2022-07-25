import React, { useEffect, useContext } from "react";
import { MAX_DISTANCE, BASE_FEE } from "../helper/Helper";
import { ContextOne } from "../App";
function Distance() {
  const contextVal = useContext(ContextOne);

  useEffect(() => {
    if (contextVal.state.deliveryDistance < 500) {
      contextVal.state.distanceFee = 1;
    }
    if (
      contextVal.state.deliveryDistance > 500 &&
      contextVal.state.deliveryDistance < 1000
    ) {
      contextVal.state.distanceFee = 2;
    }
    if (contextVal.state.deliveryDistance > 1000) {
      for (let i = 1; i < MAX_DISTANCE; i++) {
        if (
          contextVal.state.deliveryDistance > i * 1000 &&
          contextVal.state.deliveryDistance <= (i + 0.5) * 1000
        ) {
          contextVal.state.distanceFee = BASE_FEE + i;
          break;
        }
        if (
          contextVal.state.deliveryDistance > (i + 0.5) * 1000 &&
          contextVal.state.deliveryDistance <= (i + i) * 1000
        ) {
          contextVal.state.distanceFee = BASE_FEE + i + 1;
          break;
        }
      }
    }

    console.log("Distance fee is : " + contextVal.state.distanceFee);
  }, [contextVal.state.deliveryDistance]);
  return (
    <div>
      <label htmlFor="deliveryDist">Delivery Distance:</label>
      <input
        value={contextVal.state.deliveryDistance}
        type="number"
        id="deliveryDist"
        className="deliveryDist"
        onChange={(e) =>
          contextVal.dispatch({
            type: "calcDistanceValue",
            value: e.target.value,
          })
        }
      ></input>
    </div>
  );
}

export default Distance;
/*
  for(i=1;i<maxDistance;i++){
    if(props.deliveryDistance > i*1000 && props.deliveryDistance < (i+0.5) *1000){
      fee = i;
      break;
    }
    if(props.deliveryDistance>(i+0.5)*1000 && props.deliveryDistance < (i+i)*1000 ){
      fee = i+1;
      break;
    }
  }



*/
