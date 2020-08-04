import React, { useState } from "react";
import Modal from "react-modal";

export const CompleteModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  return <Modal isOpen={modalOpen}></Modal>;
};
