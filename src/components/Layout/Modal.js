import classes from "./Modal.module.css";
import img from "../../assets/images/icon-close.svg";
import { Link } from "react-router-dom";

function Modal(props) {
  const onClickHandler = () => {
    props.onCloseModal();
  };

  return (
    <div className={classes.modal}>
      <img onClick={onClickHandler} src={img} alt="" />

      <ul>
        <li>
          <Link to="/">mecury</Link>
        </li>

        <li>
          <Link to="/venus">venus</Link>
        </li>

        <li>
          <Link to="/earth">earth</Link>
        </li>

        <li>
          <Link to="/mars">mars</Link>
        </li>

        <li>
          <Link to="/jupiter">jupiter</Link>
        </li>

        <li>
          <Link to="/saturn">saturn</Link>
        </li>

        <li>
          <Link to="/uranus">uranus</Link>
        </li>

        <li>
          <Link to="/neptune">neptune</Link>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
