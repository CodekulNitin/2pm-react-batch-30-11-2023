import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/router/Navbar";
import About from "./components/router/About";
import ContactUs from "./components/router/ContactUs";

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
//https://templates.envytheme.com/tinzer/default/index-2.html
function App() {
  const [text, setText] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
