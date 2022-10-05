
import React from "react";
import "./modal.css";
import {modalData} from "../pages/About.js"
function Modal({ setModalIsOpen }, modalData) {
  return (
    <div className="modalBackground" style={{position:"fixed",height:"200px",width:"300px",background:"purple", display:"block"}}>
      <div className="modalInner">
      <h1>{modalData?.name}</h1>
      <p>{modalData?.role}</p> 
                  <div>
                    <button onClick={() => setModalIsOpen(false)}>X</button>
                  </div>
      </div>
    </div>
  );
}

export default Modal;