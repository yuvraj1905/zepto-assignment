import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useGroupContext } from "../context/useGroupContext";

const Capsule = ({ data }) => {
  const { name, pictureUrl } = data;
  const { orgData, setOrgData, capData, setCapdata, query, setFiltereddata } =
    useGroupContext();
  const clickHandler = (name) => {
    const newData = capData?.filter((e) => e.name !== name);
    setOrgData([...orgData, { ...data }]);
    setCapdata([...newData]);
    const filtered = [...orgData, { ...data }]?.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(query.toLowerCase()) ||
        email.toLowerCase().includes(query.toLowerCase()) ||
        query === ""
    );
    setFiltereddata([...filtered]);
  };
  return (
    <span className="flex capsule rounded p-1 text-white items-center justify-around border-2 border-white">
      <img src={pictureUrl} alt="" className="cardImg2" />
      <p className="font-semibold text-lg">{name}</p>
      <button>
        <MdOutlineCancel size={20} onClick={() => clickHandler(name)} />
      </button>
    </span>
  );
};

export default Capsule;
