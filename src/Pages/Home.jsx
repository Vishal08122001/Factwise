import React, { useState, useContext, useEffect, useCallback } from "react";
import Accordian from "../components/Accordian";
import { CelebritiesContext } from "../context/CelebrityContext";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const [openAccordianID, setOpenAccordianID] = useState(null);
  const { jsonData } = useContext(CelebritiesContext);
  const [filteredData, setFilteredData] = useState(jsonData);
  const [editModeAccordianID, setEditModeAccordianID] = useState(null);

  // This function handles the opening and closing of the accordian which has been clicked
  const handleAccordianClick = (id) => {
    if (editModeAccordianID === null) {
      setOpenAccordianID((prevId) => (prevId === id ? null : id));
    }
  };

  // This function handles the searching input
  const handleSearch = useCallback(
    (searchValue) => {
      const filteredResults = jsonData.filter((celeb) => {
        const fullName = celeb.first + " " + celeb.last;
        return fullName.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredData(filteredResults);
    },
    [jsonData]
  );

  // Using use effect here beacause we need to update the dom on every updation in JSON Data
  useEffect(() => {
    handleSearch("");
  }, [handleSearch]); //Passing JSONdata as a dependency here

  return (
    <div className="Container">
      <SearchBox onSearch={handleSearch} />
      {filteredData.map((celeb) => {
        return (
          <div key={celeb.id} className="rounded border border-2 mx-4 my-2">
            <Accordian
              id={celeb.id}
              isOpen={celeb.id === openAccordianID}
              first={celeb.first}
              last={celeb.last}
              dob={celeb.dob}
              Gender={celeb.gender}
              Country={celeb.country}
              description={celeb.description}
              picture={celeb.picture}
              onClick={() => handleAccordianClick(celeb.id)}
              setEditModeAccordianID={setEditModeAccordianID}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
