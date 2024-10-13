import React, { useState } from "react";
import "./Main.css";
import Room from "./Room/Room";
import Topbar from "./top/Topbar";
import Bottombar from "./Bottom/Bottombar";
import data from "./Data.json"; // data.json 파일을 import

function Main() {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [mainDoctor, setMainDoctor] = useState("");
  

  const roomsData = [];
  for (let i = 0; i < data.length; i += 6) {
    let roomData = data.slice(i, i + 6);
    if (roomData.length % 2 !== 0) {
      roomData.push({ id: `fake-${i}` });
    }
    roomsData.push(roomData);
  }

  return (
    <div className="Container">
      <Topbar
        setSelectedRadio={setSelectedRadio}
        setMainDoctor={setMainDoctor}
      />
      <div className="MainContent">
        <div className="Rooms">
          {roomsData.map((roomData, index) => (
            <Room
              key={index}
              data={roomData}
              selectedRadio={selectedRadio}
              mainDoctor={mainDoctor}
            />
          ))}
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default Main;
