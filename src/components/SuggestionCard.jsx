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
    filtereddata,
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
    if (selectedIndex !== null) {
      let index = -1;
      for (let i = 0; i < filtereddata?.length; i++) {
        index++;
        if (filtereddata[i].name === name) {
          break;
        }
        continue;
      }
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  };

  return (
    <div
      onMouseEnter={() => handleHover(name)}
      onClick={() => clickHandler(name)}
      className="p-2 w-full bg-white flex items-center profile gap-4 hover:cursor-pointer"
    >
      <img src={pictureUrl} alt="" className="cardImg" />
      <p className="font-semibold text-xl">{name}</p>
      <p className="text-lg text-stone-600">{email}</p>
    </div>
  );
};

export default SuggestionCard;
