import { createContext, useState } from "react";
import planetsData from "../../data.json";

const PlanetContext = createContext({
  planets: [],
});

export const PlanetContextProvider = (props) => {
  const [planetList, setPlanetList] = useState(planetsData);

  return (
    <PlanetContext.Provider value={{ planets: planetList }}>
      {props.children}
    </PlanetContext.Provider>
  );
};

export default PlanetContext;
