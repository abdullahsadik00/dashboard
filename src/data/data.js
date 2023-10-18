import { iconsImgs, overviewImg } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Dashboard", image: iconsImgs.home },
  { id: 2, title: "Product", image: iconsImgs.budget },
  { id: 3, title: "Customers", image: iconsImgs.plane },
  { id: 4, title: "Income", image: iconsImgs.wallet },
  { id: 5, title: "Promote", image: iconsImgs.bills },
  { id: 6, title: "Help", image: iconsImgs.report },
];

export const transactions = [
  {
    id: 11,
    name: "Sarah Parker",
    image: personsImgs.person_four,
    date: "23/12/04",
    amount: 22000,
  },
  {
    id: 12,
    name: "Krisitine Carter",
    image: personsImgs.person_three,
    date: "23/07/21",
    amount: 20000,
  },
  {
    id: 13,
    name: "Irene Doe",
    image: personsImgs.person_two,
    date: "23/08/25",
    amount: 30000,
  },
];

export const reportData = [
  {
    id: 1,
    month: "Jan",
    value1: 45,
    value2: null,
  },
  {
    id: 12,
    month: "Feb",
    value1: 45,
    value2: 60,
  },
  {
    id: 13,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 14,
    month: "Apr",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "May",
    value1: 45,
    value2: null,
  },
  {
    id: 16,
    month: "Jun",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Jul",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "Aug",
    value1: 45,
    value2: null,
  },
  {
    id: 19,
    month: "Sept",
    value1: 45,
    value2: null,
  },
  {
    id: 20,
    month: "Oct",
    value1: 45,
    value2: null,
  },
  {
    id: 21,
    month: "Nov",
    value1: 45,
    value2: null,
  },
  {
    id: 22,
    month: "Dec",
    value1: 45,
    value2: null,
  },
];

export const overviews = [
  {
    title: "Earning",
    amount: "$198k",
    percent: "37.9%",
    month: true,
    image: overviewImg.earning,
    increase: true,
    grad: "overview1",
  },
  {
    title: "Ordrs",
    amount: "$2.4k",
    percent: "2%",
    month: true,
    image: overviewImg.order,
    increase: false,
    grad: "overview2",
  },
  {
    title: "Balance",
    amount: "$2.4k",
    percent: "2%",
    month: true,
    image: overviewImg.balance,
    increase: false,
    grad: "overview3",
  },
  {
    title: "Total Sales",
    amount: "$89k",
    percent: "11%",
    month: false,
    image: overviewImg.sales,
    increase: true,
    grad: "overview4",
  },
];
