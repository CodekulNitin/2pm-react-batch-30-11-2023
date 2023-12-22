import "./App.css";
import FormListing from "./components/form/FormListing";
import DataPassingUsingProps from "./components/props/DataPassingUsingProps";
import Form from "./components/reacthookform/Form";
import HookFormExample from "./components/testfile/HookFormExample";
import ItemCreation from "./components/testfile/ItemCreation";

const cardInformation = [
  {
    id: 1,
    CardName: "Platinum",
    Price: "5000",
    ticketInfo: "Standing 1 Ticket for 1 person",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 2,
    CardName: "Gold",
    Price: "4000",
    ticketInfo: "Standing 1 Ticket for 1 person",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 3,
    CardName: "Silver",
    Price: "2500",
    ticketInfo: "Standing 1 Ticket for 1 person",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 4,
    CardName: "Diomand",
    Price: "2000",
    ticketInfo: "Standing 1 Ticket for 1 person",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

function App() {
  return (
    <div className="App">
      {/* export  */}
      {/* <Navbar />
      <HomePage />  */}
      {/* <ItemCreation /> */}
      {/* <HookFormExample /> */}
      {/* <FormListing /> */}
      {/* <Form /> */}
      <DataPassingUsingProps cardInfo={cardInformation} />
    </div>
  );
}

export default App;
