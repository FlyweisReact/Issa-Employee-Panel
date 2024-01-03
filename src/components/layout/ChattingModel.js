import React from "react";
import "./Chat.css";
import { IoMdClose } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";

const ChattingModal = ({ onClose, children }) => {
  return (
    <div
      style={{ width: "100%", overflow: "hidden" }}
      className="chattingmodal-overlay"
      onClick={onClose}
    >
      <div
        className="chattingmodal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <IoArrowBackCircle
          style={{
            color: "#1A9FB2",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default ChattingModal;
