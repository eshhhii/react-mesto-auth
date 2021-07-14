import React from "react";
import successIcon from "../images/succes.png";
import failIcon from "../images/fail.png";

function InfoTooltip({ onClose }) {
  return (
    <div className="popup popup_infotool">
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose} />
        <img src={successIcon} alt="" className="popup__icon" />
        <p className="popup__title-info">
          сделать тернарный оператор для текста
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
