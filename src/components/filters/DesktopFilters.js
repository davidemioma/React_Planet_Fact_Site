import { useState } from "react";
import classes from "./DesktopFilters.module.css";

function DesktopFilters(props) {
  const [active, setActive] = useState(0);

  const onClickHandler = (e) => {
    if (e.target.dataset.value) {
      props.onTargetValue(e.target.dataset.value);
    }
  };

  return (
    <div onClick={onClickHandler} className={classes.filters}>
      <div
        className={active === 0 && classes.active}
        data-value="overview"
        onClick={() => setActive(0)}
      >
        <p>
          <span>01</span>
          overview
        </p>
      </div>

      <div
        className={active === 1 && classes.active}
        data-value="structure"
        onClick={() => setActive(1)}
      >
        <p>
          <span>02</span>
          structure
        </p>
      </div>

      <div
        className={active === 2 && classes.active}
        data-value="surface"
        onClick={() => setActive(2)}
      >
        <p>
          <span>03</span>
          surface
        </p>
      </div>
    </div>
  );
}

export default DesktopFilters;
