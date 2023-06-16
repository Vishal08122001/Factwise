import React, { createContext, useState } from "react";
import Data from "../Data/celebrities.json";

const CelebritiesContext = createContext();

const CelebritiesProvider = ({ children }) => {
  //  Declaring JSON data in useState becaus ewe need to update it
  const [jsonData, setJsonData] = useState(Data);

  // Function for updating the data in place
  const updateJSONData = (updatedData) => {
    setJsonData(updatedData);
  };
  return (
    <CelebritiesContext.Provider value={{ jsonData, updateJSONData }}>
      {children}
    </CelebritiesContext.Provider>
  );
};

export { CelebritiesProvider, CelebritiesContext };
