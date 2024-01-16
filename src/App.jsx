import { useEffect, useState } from "react";
import "./App.css";
import { GrGroup } from "react-icons/gr";
import SuggestionCard from "./components/SuggestionCard";
import Capsule from "./components/Capsule";
import { useGroupContext } from "./context/useGroupContext";

function App() {
  const {
    query,
    setQuery,
    orgData,
    setOrgData,
    filtereddata,
    setFiltereddata,
    capData,
    setCapdata,
    selectedIndex,
    setSelectedIndex,
  } = useGroupContext();
  const [suggestionDisplay, setSuggestionDisplay] = useState(false);
  const handleInputChange = (e) => {
    // console.log(e);
    const userInput = e.target.value;
    setQuery(userInput);
    const filtered = orgData?.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(userInput.toLowerCase()) ||
        email.toLowerCase().includes(userInput.toLowerCase()) ||
        userInput === ""
    );
    setFiltereddata([...filtered]);
    setSelectedIndex(null);
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     if (selectedIndex === null || selectedIndex === 0) {
  //       setSelectedIndex(filtereddata.length - 1);
  //     } else {
  //       setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //     }
  //   } else if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     if (selectedIndex === null || selectedIndex === filtereddata.length - 1) {
  //       setSelectedIndex(0);
  //     } else {
  //       setSelectedIndex((prevIndex) =>
  //         prevIndex === null
  //           ? 0
  //           : Math.min(prevIndex + 1, filtereddata.length - 1)
  //       );
  //     }
  //   } else if (e.key === "Enter" && selectedIndex !== null) {
  //     console.log(filtereddata[selectedIndex]);
  //   }
  // };
  let delConfirm = false;
  const handleKeyDown = (e) => {
    if (delConfirm && e.key !== "Backspace") {
      const capsulesSpan = document.getElementById("capsulesSpan");
      const spansInsideCapsules = capsulesSpan.getElementsByTagName("span");
      const lastSpan = spansInsideCapsules[spansInsideCapsules.length - 1];
      if (lastSpan) {
        lastSpan.style.border = "2px solid white";
      }
      delConfirm = false;
    }
    if (e.key === "Backspace" && e.target.value === "") {
      if (capData?.length > 0) {
        if (delConfirm) {
          const last = capData[capData?.length - 1];
          setOrgData([...orgData, { ...last }]);
          const newData = capData?.slice(0, -1);
          setCapdata([...newData]);
          const filtered = [...orgData, { ...last }]?.filter(
            ({ name, email }) =>
              name.toLowerCase().includes(query.toLowerCase()) ||
              email.toLowerCase().includes(query.toLowerCase()) ||
              query === ""
          );
          setFiltereddata([...filtered]);
          delConfirm = false;
        } else {
          const capsulesSpan = document.getElementById("capsulesSpan");
          const spansInsideCapsules = capsulesSpan.getElementsByTagName("span");
          const lastSpan = spansInsideCapsules[spansInsideCapsules.length - 1];
          if (lastSpan) {
            lastSpan.style.border = "2px solid #ff3269";
          }
          delConfirm = true;
        }
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedIndex === null || selectedIndex === 0) {
        setSelectedIndex(filtereddata.length - 1);
      } else {
        setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedIndex === null || selectedIndex === filtereddata.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex((prevIndex) =>
          prevIndex === null
            ? 0
            : Math.min(prevIndex + 1, filtereddata.length - 1)
        );
      }
    } else if (e.key === "Enter" && selectedIndex !== null) {
      const selectedProfile = filtereddata[selectedIndex];
      const newData = orgData?.filter((e) => e.name !== selectedProfile?.name);
      const newCapsule = orgData?.find((e) => e.name === selectedProfile?.name);
      setOrgData([...newData]);
      setCapdata([...capData, newCapsule]);
      setQuery("");
      setFiltereddata([...newData]);
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const suggestionsSection = document.getElementById("suggestionsSection");
      const divInsideCapsules = suggestionsSection.getElementsByTagName("div");
      for (let i = 0; i < divInsideCapsules?.length; i++) {
        divInsideCapsules[i].style.backgroundColor = "white";
      }
      const selectedProfile = divInsideCapsules[selectedIndex];
      if (selectedProfile) {
        selectedProfile.style.backgroundColor = "#4299e1";
      }
    }
  }, [selectedIndex]);
  return (
    <div className="w-1/2 flex flex-col h-3/4 bg-stone-200 containerCenter rounded-lg ">
      <section className="flex justify-between items-center header px-4 py-2">
        <img
          alt="sasta-logoooooo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          srcSet="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 256w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 384w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 640w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 750w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 828w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 1080w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 1200w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 1920w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 2048w, https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg 3840w"
          src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.20.0/images/logo.svg"
          width="105"
          height="35"
          decoding="async"
          data-nimg="1"
          className="relative overflow-hidden false max-w-none"
          loading="lazy"
          style={{ color: "transparent", objectFit: "contain" }}
        />

        <h2 className="text-center text-xl header-line m-0 p-1 rounded flex items-center justify-center gap-2">
          <GrGroup size={22} />
          <span>Gold Users Group</span>
        </h2>
      </section>
      <section className="main bg-stone-200">
        <div className="flex inputSection">
          {capData?.length > 0 && (
            <span id="capsulesSpan" className="flex p-3 mt-3 bg-white gap-2">
              {capData?.map((chip) => (
                <Capsule data={chip} />
              ))}
            </span>
          )}
          <input
            onFocus={() => {
              setSuggestionDisplay(true);
            }}
            // onBlur={() => {
            //   setSuggestionDisplay(false);
            // }}
            className="w-full p-3 mt-3 text-black outline-none pl-2 line-clamp-2"
            placeholder="Add new user.."
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {suggestionDisplay && (
          <section
            id="suggestionsSection"
            className="flex w-2/3 flex-col gap-[1px] shadow-xl max-h-56 overflow-y-auto"
          >
            {filtereddata?.length > 0 ? (
              filtereddata?.map((dataa) => <SuggestionCard data={dataa} />)
            ) : (
              <h3 className="p-2 w-full text-white font-semibold flex items-center gap-4 bg-blue-400">
                No data. Why this kolaveri-D?
              </h3>
            )}
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
