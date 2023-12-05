import React, { useEffect, useState } from "react";

const testData = [
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

const TestFile = () => {
  const [cardData, setCardData] = useState(testData);
  const [selectedCard,setSelectedCard]=useState(null)

  useEffect(() => {
    const indexToUpdate = cardData.findIndex((item) => item.srNo === "02");
    const updatedCardData = [...cardData];
    console.log("updatedCardData[indexToUpdate].cardName",indexToUpdate);
    if (
      indexToUpdate !== -1 &&
      updatedCardData[indexToUpdate].cardName !== "New Card Name"
    ) {
      updatedCardData[indexToUpdate] = {
        ...updatedCardData[indexToUpdate],
        cardName: "New Card Name",
      };
      setCardData(updatedCardData);
    }
  }, []);
console.log("SelectedCard",selectedCard);
  return (
    <div className="flex space-x-3 items-center">
      {cardData.map((card) => (
        <div key={card.id} onClick={()=>{setSelectedCard(card)}}>
          <p>SrNo: {card.srNo}</p>
          <p>Card Name: {card.cardName}</p>
          <p>Description: {card.description}</p>          
        </div>
      ))}
    </div>
  );
};

export default TestFile;
