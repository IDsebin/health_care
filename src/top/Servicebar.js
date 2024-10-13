import React, { useState, useEffect } from "react";
import "./Servicebar.css";
import login from "../image/menu-icon/상단1열_로그아웃.png";
import alert from "../image/menu-icon/상단2열_알림조회.png";
import home from "../image/menu-icon/상단2열_홈으로.png";
import setting from "../image/menu-icon/상단2열_환경설정.png";
import refresh from "../image/menu-icon/refresh.jpg";
import { Link } from "react-router-dom";

function Servicebar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateClock();
    const timerId = setInterval(updateClock, 60000); // 매 분마다 시간 업데이트

    return () => clearInterval(timerId); // 컴포넌트 제거 시 타이머 정리
  }, []);

  return (
    <div>
      <div className="Servicebar_Border">
        <div className="Servicebar_Idframe">
          <p style={{ marginLeft: "5px" }}>EUM: care</p>
          <div className="Servicebar_Id">0051</div>
        </div>
        <div className="Servicebar_Appearname">
          <input type="checkbox" id="toggle" hidden />
          <label htmlFor="toggle" className="toggleSwitch">
            <span className="toggleButton"></span>
          </label>
          <p style={{ color: "white", fontSize: "10px", marginTop: "5px" }}>
            이름 표시
          </p>
        </div>
        <div className="Servicebar_Refresh">
          <img src={refresh} alt="" />
        </div>
        <div className="Servicebar_Currenttime">{currentTime}</div>
        <div className="Servicebar_Title">액팅관리</div>
        <div className="Servicebar_Searchbar">
          <p style={{ color: "white" }}>담당간호사</p>
          <input placeholder="간호사를 입력하세요" />
        </div>
        <div className="Servicebar_user">
          <div className="Servicebar_Login">
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

          <div className="Servicebar_Submenu">
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

export default Servicebar;
