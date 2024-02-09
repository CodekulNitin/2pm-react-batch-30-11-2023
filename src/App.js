import React, { createContext, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/router/Navbar";
import About from "./components/router/About";
import ContactUs from "./components/router/ContactUs";
import Products from "./components/router/Products";
import NewProductsList from "./components/router/NewProductsList";
import ParentComponent from "./components/usecallback/ParentComponent";
import GetImagesFromLocalApi from "./components/axios/GetImagesFromLocalApi";
import UseReducerHook from "./components/hooks/UseReducerHook";
import Counter from "./components/hooks/Counter";
import { MyFormComponent } from "./components/customHook/MyFormComponent";
import UseRefHook from "./components/hooks/UseRefHook";
import UseContextHook from "./components/customHook/UseContextHook";

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

export const UserContext = React.createContext();
export const ListContext = React.createContext();
//https://templates.envytheme.com/tinzer/default/index-2.html
function App() {
  const [text, setText] = useState("");
  return (
    <>
      <UserContext.Provider value={cardInformation}>
        <ListContext.Provider value={cardInformation}>
          <UseContextHook />
        </ListContext.Provider>
      </UserContext.Provider>
      {/* <Navbar /> */}

      {/* <UseRefHook />
      <GetImagesFromLocalApi /> */}
      {/* <UseReducerHook />
      <Counter/>
      <MyFormComponent /> */}
      {/* <Routes>
        <Route path="/">
          <Route path="/about" element={<UseReducerHook />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="products" element={<Products />}>
            <Route path="newproductslist" element={<NewProductsList />} />
            <Route path="parentcomponent" element={<GetImagesFromLocalApi />} />
          </Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
