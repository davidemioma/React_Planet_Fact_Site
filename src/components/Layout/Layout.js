import Nav from "./Nav";
import Modal from "./Modal";
import { Fragment, useState } from "react";

function Layout(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <Nav onOpenModal={openModal} />
      {isModalOpen && <Modal onCloseModal={closeModal} />}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
