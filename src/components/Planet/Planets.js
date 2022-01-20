import { Fragment, useState, useContext } from "react";
import Layout from "../Layout/Layout";
import MobileFilters from "../filters/MobileFilters";
import DesktopFilters from "../filters/DesktopFilters";
import PlanetInfo from "./PlanetInfo";
import PlanetContext from "../store/planet-context";
import classes from "./Planets.module.css";
import { useParams } from "react-router-dom";

function OtherPlanets() {
  const params = useParams();

  const planetId = params.planetId;

  const ctx = useContext(PlanetContext);

  const [targetValue, setTargetValue] = useState("");

  const getTargetValue = (value) => {
    setTargetValue(value);
  };

  const planet = ctx.planets.filter(
    (planet) => planet.name.toLowerCase() === planetId
  );

  let img = planet[0].images.planet;

  let planetContent = planet[0].overview.content;

  let planetLink = planet[0].overview.source;

  if (targetValue === "structure") {
    planetContent = planet[0].structure.content;
    planetLink = planet[0].structure.source;
    img = planet[0].images.internal;
  } else if (targetValue === "surface") {
    planetContent = planet[0].geology.content;
    planetLink = planet[0].geology.source;
    img = planet[0].images.geology;
  } else {
    planetContent = planet[0].overview.content;
    planetLink = planet[0].overview.source;
    img = planet[0].images.planet;
  }

  return (
    <Fragment>
      <Layout />

      <MobileFilters onTargetValue={getTargetValue} />

      <div className={`container ${classes.contents}`}>
        <img src={img} alt="" />

        <div>
          <div className={classes.content}>
            <h1>{planet[0].name}</h1>

            <p>{planetContent}</p>

            <span className={classes.link}>
              <span>Source:</span>
              <a target="_blank" href={planetLink}>
                wikipedia
              </a>
            </span>
          </div>

          <DesktopFilters onTargetValue={getTargetValue} />
        </div>
      </div>

      <PlanetInfo
        rotation={planet[0].rotation}
        revolution={planet[0].revolution}
        radius={planet[0].radius}
        temperature={planet[0].temperature}
      />
    </Fragment>
  );
}

export default OtherPlanets;
