import React, { useEffect, useState } from "react";
import CompanyImage from "../common/assets/abc.png";
import IncImage from "../common/assets/IncImage.png";
import FastTagImage from "../common/assets/FastageImage.png";
import ElapisImage from "../common/assets/ElispseImage.png";
import Modal from "./Modal";
import TestFile from "./TestFile";

const dummyArr = [
  {
    companyName: FastTagImage,
  },
  {
    companyName: ElapisImage,
  },
  {
    companyName: IncImage,
  },
  {
    companyName: CompanyImage,
  },
  {
    companyName: CompanyImage,
  },
  {
    companyName: CompanyImage,
  },
];

const cardData = [
  {
    id: 1,
    srNo: "01",
    icon: "",
    cardName: "Reminding & Resumption",
    description:
      "You're constantly switching between unfinished tasks all day, leaving tabs open so you don't lose where you left off.",
  },
  {
    id: 2,
    srNo: "02",
    icon: "",
    cardName: "Resurfacing",
    description:
      "You leave articles and papers open in tabs to read because you don't have time to read them right now but if you put them away you may forget and never get back to them.",
  },
  {
    id: 3,
    srNo: "03",
    icon: "",
    cardName: "Refinding",
    description:
      "You leave docs and links open to avoid sifting through emails or Slack to find them again.",
  },
];

function HomePage() {
  const [data, setData] = React.useState(0);
  const [tempArr, setTempArr] = React.useState({
    name: "abc",
    address: "lorem",
    id: 1,
  });
  const [cardTempData, setCardTempDate] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const incrementCounter = () => {
    setData(data + 1);
    // setTempArr(tempArr.name = "codekul")
    setTempArr((previousState) => {
      return { ...previousState, name: "codekul" };
    });
  };

  const decrementCounter = () => {
    setData(data - 1);
  };

  const apiData = () => {
    let tempArr = [...cardTempData];
    tempArr = cardData;
    setCardTempDate(tempArr);
  };  

  console.log("data", data, tempArr);
  console.log("cardTempData", cardTempData);
  return (
    <div className="px-5 md:px-12">
      <div className="pt-20  bg-[url('https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6320c6e2297b480e45fe9561_Grad-2.svg')] text-center pb-5">
        <h1 className="md:text-[50px] lg:text-[72px] font-extrabold">
          Your browser is a mess.
          <br /> It’s not your fault.
        </h1>
        <p className="text-gray-500">
          Skeema is a new way to manage your tabs that helps declutter your
          browser and your mind.
        </p>

        <button
          type="button"
          className="bg-black text-white rounded-full p-5 mt-14 font-semibold"
        >
          Get Started
        </button>

        {/* secition 2 */}
      </div>
      <h4 className="text-center text-gray-400 my-5">AS FEATURED IN</h4>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 ">
        {dummyArr.map((compName) => {
          return (
            <div>
              <img
                src={compName.companyName}
                alt="png"
                className="md:w-[80px] lg:w-[120px]"
              />
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="md:text-2xl lg:text-5xl font-bold my-10 lg:my-20">
          Skeema solves the three main problems that <br /> cause tab overload.
        </h1>
        <div className="grid md:grid-cols-3 gap-3">
          {cardData.map((cardName) => {
            return (
              <div className="shadow p-3 border rounded-xl bg-white ">
                <div className="flex justify-between">
                  <h3>{cardName.srNo}</h3>
                  <img src={cardName.icon} alt="image" />
                </div>
                <h3 className="my-3">{cardName.cardName}</h3>
                <p>{cardName.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {Number(data) > 0 ? (
        <button
          type="button"
          className="border rounded bg-indigo-900 text-white p-2"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      ) : (
        ""
      )}
      <button
        type="button"
        className="border rounded bg-indigo-900 text-white p-2"
        onClick={() => {
          apiData();
          incrementCounter();
        }}
      >
        Increment
      </button>
      <div className="flex space-x-2 border">
        <h1>{tempArr.name}</h1>
        <h1> {Number(data) > 0 ? <h1>{data} </h1> : ""}</h1>
      </div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      {openModal ? (
        <Modal data={cardTempData} setOpenModal={setOpenModal} />
      ) : (
        ""
      )}
      <TestFile />
    </div>
  );
}

export default HomePage;
