import React, { useState, useEffect } from "react";
import "./Topbar.css";
import login from "../image/menu-icon/상단1열_로그아웃.png";
import alert from "../image/menu-icon/상단2열_알림조회.png";
import home from "../image/menu-icon/상단2열_홈으로.png";
import setting from "../image/menu-icon/상단2열_환경설정.png";
import { Link } from "react-router-dom";

function Topbar({ setSelectedRadio, setMainDoctor, mainDoctor }) {
  const menuItems = ["환자정보", "예약관리", "처치관리", "연결관리", "I-care"];
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("1");

  const radioOptions = [
    { value: "1", label: "전체" },
    { value: "2", label: "수액" },
    { value: "3", label: "난간" },
    { value: "4", label: "심박" },
    { value: "5", label: "예약" },
    { value: "6", label: "산소" },
    { value: "7", label: "I-care" },
  ];

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedRadio(event.target.value);
  };

  const handleDoctorInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setMainDoctor(inputValue);
    }
  };

  useEffect(() => {
    setSelectedRadio(selectedOption);
  }, [selectedOption, setSelectedRadio]);

  return (
    <div>
      <div className="Topbar_Border">
        <div className="Topbar_Idframe">
          <p style={{ marginLeft: "5px" }}>EUM: care</p>
          <div className="Topbar_Id">0051</div>
        </div>
        <div className="Topbar_Appearname">
          {/*이름 표시*/}
          <input type="checkbox" id="toggle" hidden />
          <label htmlFor="toggle" class="toggleSwitch">
            <span class="toggleButton"></span>
          </label>
          <p style={{ color: "white", fontSize: "10px", marginTop: "5px" }}>
            이름 표시
          </p>
        </div>
        <div className="Topbar_Radiobox">
          {radioOptions.map((option) => (
            <div className="radio-container" key={option.value}>
              <label key={option.value}>
                <input
                  type="radio"
                  name="radioExample"
                  value={option.value}
                  onChange={handleRadioChange}
                  checked={selectedOption === option.value}
                />
                <div style={{ color: "white" }}>{option.label}</div>
              </label>
            </div>
          ))}
        </div>{" "}
        {/** RadioBox 파트 */}
        <div className="Topbar_Menu">
          {menuItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        {/** input 파트 */}
        <div className="Topbar_input">
          <p style={{ color: "white" }}>담당 의사:</p>
          <input
            placeholder="담당 의사를 입력하세요"
            id="doctorName"
            type="text"
            value={inputValue}
            onChange={handleDoctorInput}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="Topbar_user">
          <div className="Topbar_Login">
            <p style={{ color: "white", fontSize: "10px" }}>
              홍간호님 로그인중
            </p>
            <img
              src={login}
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "10px",
              }}
              alt="로그인"
            />
          </div>

          <div className="Topbar_Submenu">
            <img
              src={alert}
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "10px",
              }}
              alt="알림"
            />
            <Link to="/home">
              <img
                src={home}
                style={{
                  width: "15px",
                  height: "15px",
                  marginLeft: "10px",
                }}
                alt="홈"
              />
            </Link>
            <img
              src={setting}
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "10px",
              }}
              alt="설정"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
