import React from "react";
import { useGroupContext } from "../context/useGroupContext";

const SuggestionCard = ({ data }) => {
  const { name, pictureUrl, email } = data;
  const {
    orgData,
    setOrgData,
    capData,
    setCapdata,
    setQuery,
    setFiltereddata,
    selectedIndex,
    setSelectedIndex,
  } = useGroupContext();
  const clickHandler = (name) => {
    const newData = orgData?.filter((e) => e.name !== name);
    const newCapsule = orgData?.find((e) => e.name === name);
    setOrgData([...newData]);
    setCapdata([...capData, newCapsule]);
    setQuery("");
    setFiltereddata([...newData]);
  };
  const handleHover = (name) => {
    // console.log(selectedIndex);
    if (selectedIndex !== null) {
      const suggestionsSection = document.getElementById("suggestionsSection");
      const divInsideCapsules = suggestionsSection.getElementsByTagName("div");
      for (let i = 0; i < divInsideCapsules?.length; i++) {
        divInsideCapsules[i].style.backgroundColor = "white";
        divInsideCapsules[i].classList.add("hover-effect");
      }
      //   const currIndex = [...divInsideCapsules].findIndex(
      //     (e) => e.name === name
      //   );
      //   const selectedProfile = divInsideCapsules[currIndex];
      //   if (selectedProfile) {
      //     selectedProfile.style.backgroundColor = "#4299e1";
      //   }
      setSelectedIndex(null);
    }
  };
  return (
    <div
      onMouseEnter={() => handleHover(name)}
      onClick={() => clickHandler(name)}
      className="p-2 w-full bg-white  flex items-center profile gap-4 hover:bg-blue-400 hover:cursor-pointer"
    >
      <img src={pictureUrl} alt="" className="cardImg" />
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-lg text-stone-600">{email}</p>
    </div>
  );
};

export default SuggestionCard;
