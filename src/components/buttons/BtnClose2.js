import React from "react";
import "../modals/modal.css";

function BtnClose2({ onClick }) {
  return (
    <button className="btnClose2 animationFundido" onClick={onClick}>
      <span>❌</span>
    </button>
  );
}

export default BtnClose2;
