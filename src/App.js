import React, { useReducer } from "react";
import "./App.css";
import Surcharge from "../src/kids_components/Surcharge";
import Distance from "./kids_components/Distance";
import OrderedItems from "./kids_components/OrderedItems";
import TotalFee from "./TotalFee/TotalFee";
import { DATE_RN, RND1 } from "./helper/Helper";

export const ContextOne = React.createContext();
function reducer(state, newState) {
  switch (newState.type) {
    case "calcCartValue":
      return { ...state, cartValue: +newState.value };
    case "calcDistanceValue":
      return { ...state, deliveryDistance: +newState.value };
    case "calcContainerValue":
      return { ...state, amountOfItemsValue: +newState.value };
    case "click":
      return { ...state, click: !newState.value };
    case "calcDateTime":
      return { ...state, date_time: newState.value };
    default:
      throw new Error(`${newState.type} action is not supported`);
  }
}
function App() {
  const initialState = {
    cartValue: "",
    deliveryDistance: "",
    amountOfItemsValue: "",
    surchargeFee: "",
    distanceFee: "",
    containerFee: "",
    totalFee: "",
    date_time: "",
    click: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("asd");
  };
  const changeClickidy = (e) => {
    e.preventDefault();
    dispatch({ type: "click", value: state.click });
  };
  const confirmTime = (e) => {
    e.preventDefault();
    let date = document.getElementById("datetime").value;
    dispatch({ type: "calcDateTime", value: new Date(date) });
  };
  return (
    <>
      <ContextOne.Provider value={{ state, dispatch }}>
        <h1></h1>
        <h1>Delivery Fee Calculator </h1>
        <form onSubmit={handleSubmit} className="form">
          <Surcharge />
          <br></br>
          <Distance />
          <br></br>
          <OrderedItems />
          <br></br>

          <label htmlFor="date">When to deliver </label>
          <br></br>
          <input
            id="datetime"
            className="form-control"
            type="datetime-local"
            placeholder="Select Date&Time"
          ></input>
          <button onClick={confirmTime}>Confrim order date and time!</button>
          <br></br>
          <input
            type="submit"
            value="Calculate delivery price"
            onClick={changeClickidy}
          ></input>
          <TotalFee />
        </form>
      </ContextOne.Provider>
    </>
  );
}

export default App;

/* first one 
// const [cartValue, changeCartValue] = useState(() => initialValue());
  // const [deliveryDistance, changeDeliveryDistance] = useState(() =>
  //   initialValue()
  // );
  // const [amountOfItemsValue, changeamountOfItems] = useState(() =>
  //   initialValue()
  // );
  // const [surchargeFee, changeSurchargeFee] = useState(0);
  // const [distanceFee, changeDistanceFee] = useState(0);
  // const [containerFee, changeContainerFee] = useState(0);
  // const [click, changeClick] = useState(true);
  // const [clickedState, changeClickedState] = useState(true);

  // const changeClickidy = (e) => {
  //   e.preventDefault();
  //   changeClick(false);
  // };



*/
