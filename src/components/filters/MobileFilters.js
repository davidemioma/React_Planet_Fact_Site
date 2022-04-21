import { useState } from "react";
import classes from "./MobileFilters.module.css";

function MobileFilters(props) {
  const [active, setActive] = useState(0);

  const onClickHandler = (e) => {
    if (e.target.dataset.value) {
      props.onTargetValue(e.target.dataset.value);
    }
  };

  return (
    <div onClick={onClickHandler} className={classes.filters}>
      <span
        className={active === 0 && classes.active}
        data-value="overview"
        onClick={() => setActive(0)}
      >
        overview
      </span>

      <span
        className={active === 1 && classes.active}
        data-value="structure"
        onClick={() => setActive(1)}
      >
        structure
      </span>

      <span
        className={active === 2 && classes.active}
        data-value="surface"
        onClick={() => setActive(2)}
      >
        surface
      </span>
    </div>
  );
}

export default MobileFilters;
