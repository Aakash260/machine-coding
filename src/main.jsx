import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CounterApp from "./CounterApp/index.jsx";
import Modal from "./Modal/index.jsx";
import AutoSuggestion from "./AutoSuggestionList/index.jsx";
import Otp from "./Otp/index.jsx";
import Calculator from "./Calculator/index.jsx";
import StarRating from "./StarRating/index.jsx";
import MemoryGame from "./MemoryGame/index.jsx";
import BarChart from "./BarChart/index.jsx";
import TaskManager from "./TaskManager/index.jsx";
import TicTac from "./TicTac/index.jsx";
import InfiniteScrolling from "./InfiniteScrolling/index.jsx";
import JobBoard from "./JobBoard/index.jsx";
import SelectableGrid from "./SelectableGrid/index.jsx";
import Debounce from "./Debounce/index.jsx";
import FilterProduct from "./FilterProduct/index.jsx";
import CustomHook from "./CustmHook/index.jsx";
import FolderView from "./FolderView/index.jsx";
import Comments from "./NestedComment/index.jsx";
import FormValidation from "./FormValidation/index.jsx";
import NestedCheck from "./NestedCheck/index.jsx";
import InputChip from "./ChipInput/index.jsx";
import LeapYear from "./LeapYear/index.jsx";
import ClipBoard from "./ClipBoard/index.jsx";
import LargestNumberFormed from "./LargestNoFormed/index.jsx";
import CustomSort from "./CustomSort/index.jsx";
import Fibn from "./FibnacoSeries/index.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Fibn />
  </BrowserRouter>
);
