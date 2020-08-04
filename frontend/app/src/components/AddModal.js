import React, { useState } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button"
import {addTask} from "../api"
import {withRouter} from "react-router" 


export const AddModal = withRouter(props => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const updateState = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value)
    } else if(event.target.id === "date") {
      setDate(event.target.value)
    } else {
      setDescription(event.target.value)
    }
  }

  const addAndReload = () => {
    if (title !== "" && date !== undefined)
    addTask(title, date, description).then(() => {
      window.location="/"
    });
  }

  return (
    <>
      <Modal isOpen={props.isOpen} style={customStyle}>
        <p onClick={props.modalClose} className="modalClose">
          X
        </p>
        <div className="modal-form">
          <input id="title" onChange={updateState}  type="text" placeholder="Title"></input>
          <input id="date" onChange={updateState} type="date"></input>
          <textarea id="description" onChange={updateState}placeholder="Description"></textarea>
          <Button variant="contained" color="primary" onClick={() => addAndReload()}>Submit</Button>
        </div>
      </Modal>
    </>
  );
});

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
