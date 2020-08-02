import React from "react";
import Modal from "react-modal";

export const AddModal = (props) => {
  return (
    <>
      <Modal isOpen={props.isOpen} style={customStyle}>
        <p onClick={props.modalClose} className="modalClose">
          X
        </p>
        <form>
          <input type="text" placeholder="title"></input>
          <input type="text" placeholder="description"></input>
        </form>
      </Modal>
    </>
  );
};

const customStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(83, 74, 74, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
