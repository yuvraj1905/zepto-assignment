import { createContext, useContext, useState } from "react";
import usersData from "../data/usersData";

const GroupContext = createContext();

export const GroupContextComponent = ({ children }) => {
  let data = [...usersData];
  const [query, setQuery] = useState("");
  const [orgData, setOrgData] = useState([...data]);
  const [capData, setCapdata] = useState([]);
  const [filtereddata, setFiltereddata] = useState([...orgData]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <GroupContext.Provider
      value={{
        filtereddata,
        setFiltereddata,
        orgData,
        setOrgData,
        capData,
        setCapdata,
        query,
        setQuery,
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupContext = () => useContext(GroupContext);
