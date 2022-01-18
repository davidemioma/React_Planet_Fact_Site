import classes from "./MobileFilters.module.css";

function MobileFilters(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.value) {
      props.onTargetValue(e.target.dataset.value);
    }
  };

  return (
    <div onClick={onClickHandler} className={classes.filters}>
      <span data-value="overview">overview</span>

      <span data-value="structure">structure</span>

      <span data-value="surface">surface</span>
    </div>
  );
}

export default MobileFilters;
