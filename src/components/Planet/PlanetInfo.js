import classes from "./PlanetInfo.module.css";

function PlanetInfo(props) {
  return (
    <div className={`container ${classes.info}`}>
      <div>
        <span>rotation time</span>
        <p>{props.rotation}</p>
      </div>

      <div>
        <span>revolution time</span>
        <p>{props.revolution}</p>
      </div>

      <div>
        <span>radius</span>
        <p>{props.radius}</p>
      </div>

      <div>
        <span>average temp.</span>
        <p>{props.temperature}</p>
      </div>
    </div>
  );
}

export default PlanetInfo;
