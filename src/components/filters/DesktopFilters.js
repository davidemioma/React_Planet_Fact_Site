import classes from "./DesktopFilters.module.css";

function DesktopFilters(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.value) {
      props.onTargetValue(e.target.dataset.value);
    }
  };

  return (
    <div onClick={onClickHandler} className={classes.filters}>
      <div data-value="overview">
        <p>
          <span>01</span>
          overview
        </p>
      </div>

      <div data-value="structure">
        <p>
          <span>02</span>
          structure
        </p>
      </div>

      <div data-value="surface">
        <p>
          <span>03</span>
          surface
        </p>
      </div>
    </div>
  );
}

export default DesktopFilters;
