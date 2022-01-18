import { Fragment, useState, useContext } from "react";
import Layout from "../Layout/Layout";
import MobileFilters from "../filters/MobileFilters";
import DesktopFilters from "../filters/DesktopFilters";
import PlanetInfo from "./PlanetInfo";
import PlanetContext from "../store/planet-context";
import classes from "./Planets.module.css";
import { useParams } from "react-router-dom";
import mercuryOverview from "../../assets/images/planet-mercury.svg";
import mercuryStructure from "../../assets/images/planet-mercury-internal.svg";
import mercurySurface from "../../assets/images/geology-mercury.png";
import venusOverview from "../../assets/images/planet-venus.svg";
import venusStructure from "../../assets/images/planet-venus-internal.svg";
import venusSurface from "../../assets/images/geology-venus.png";
import earthOverview from "../../assets/images/planet-earth.svg";
import earthStructure from "../../assets/images/planet-earth-internal.svg";
import earthSurface from "../../assets/images/geology-earth.png";
import marsOverview from "../../assets/images/planet-mars.svg";
import marsStructure from "../../assets/images/planet-mars-internal.svg";
import marsSurface from "../../assets/images/geology-mars.png";
import jupiterOverview from "../../assets/images/planet-jupiter.svg";
import jupiterStructure from "../../assets/images/planet-jupiter-internal.svg";
import jupiterSurface from "../../assets/images/geology-jupiter.png";
import saturnOverview from "../../assets/images/planet-saturn.svg";
import saturnStructure from "../../assets/images/planet-saturn-internal.svg";
import saturnSurface from "../../assets/images/geology-saturn.png";
import uranusOverview from "../../assets/images/planet-uranus.svg";
import uranusStructure from "../../assets/images/planet-uranus-internal.svg";
import uranusSurface from "../../assets/images/geology-uranus.png";
import neptuneOverview from "../../assets/images/planet-neptune.svg";
import neptuneStructure from "../../assets/images/planet-neptune-internal.svg";
import neptuneSurface from "../../assets/images/geology-neptune.png";

function OtherPlanets() {
  const imagesArr = [
    {
      name: "mercury",
      overview: mercuryOverview,
      structure: mercuryStructure,
      Surface: mercurySurface,
    },
    {
      name: "venus",
      overview: venusOverview,
      structure: venusStructure,
      Surface: venusSurface,
    },
    {
      name: "earth",
      overview: earthOverview,
      structure: earthStructure,
      Surface: earthSurface,
    },
    {
      name: "mars",
      overview: marsOverview,
      structure: marsStructure,
      Surface: marsSurface,
    },
    {
      name: "jupiter",
      overview: jupiterOverview,
      structure: jupiterStructure,
      Surface: jupiterSurface,
    },
    {
      name: "saturn",
      overview: saturnOverview,
      structure: saturnStructure,
      Surface: saturnSurface,
    },
    {
      name: "uranus",
      overview: uranusOverview,
      structure: uranusStructure,
      Surface: uranusSurface,
    },
    {
      name: "neptune",
      overview: neptuneOverview,
      structure: neptuneStructure,
      Surface: neptuneSurface,
    },
  ];

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

  const planetImg = imagesArr.filter((img) => img.name === planetId);

  let img = planetImg[0].overview;

  let planetContent = planet[0].overview.content;

  let planetLink = planet[0].overview.source;

  if (targetValue === "structure") {
    planetContent = planet[0].structure.content;
    planetLink = planet[0].structure.source;
    img = planetImg[0].structure;
  } else if (targetValue === "surface") {
    planetContent = planet[0].geology.content;
    planetLink = planet[0].geology.source;
    img = planetImg[0].Surface;
  } else {
    planetContent = planet[0].overview.content;
    planetLink = planet[0].overview.source;
    img = planetImg[0].overview;
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
