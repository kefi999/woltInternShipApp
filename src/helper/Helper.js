export const MIN_SUR_VALUE = 10;
export const INITIAL_VALUE = 0;
export const MAX_DISTANCE = 10000;
export const BASE_FEE = 2;
export const FREE_SHIPPING = 100;
export const NORMAL_ITEMS = 4;
export const MAX_FEE = 15;
export const DD = String(new Date().getDate()).padStart(2, "0");
export const MM = String(new Date().getMonth() + 1).padStart(2, "0"); //January is 0!
export const YYYY = new Date().getFullYear();
export const DATE_RN = `${YYYY}-${MM}-${DD}`;
export const WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const STRING_DAY = WEEK[new Date().getDay()];
export const TIME_RN = new Date().getHours();
export let RND1 = true;
