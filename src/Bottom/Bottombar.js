import React from "react";
import { Link } from "react-router-dom";
import "./Bottombar.css";

function Bottombar() {
  return (
    <div className="Bottombar_Container">
      <div className="Bottombar_Texts">
        <p className="Bottombar_Text">병실 : 00</p>
        <p className="Bottombar_Text">병상 : 00</p>
        <p className="Bottombar_Text">환자 : 00(0)</p>
        <p className="Bottombar_Text">자리비움 : </p>
      </div>
      <div className="Bottombar_Buttons">
        <div className="Bottombar_Button">
          <Link to="/ward">회진관리</Link>
        </div>
        <div className="Bottombar_Button">
          <Link to="/actting">액팅관리</Link>
        </div>
        <div className="Bottombar_Button">
          <Link to="/nursing">간호사정</Link>
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
