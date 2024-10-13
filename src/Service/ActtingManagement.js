import React, { useState } from "react";
import Servicebar from "../top/Servicebar";
import Reservation from "./Reservation";
import TreatmentManagement from "./TreatmentManagement";
import Fall from "./ Fall";
import "./ActtingManagement.css";
import roomData from "../Data.json";
import Room from "../Room/Room";

function ActtingManagement() {
  const [activeItem, setActiveItem] = useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);
  const [roomNotes, setRoomNotes] = useState({}); // 메모를 저장할 객체 상태
  const uniqueRooms = Array.from(
    new Set(roomData.map((item) => item.roomNumber))
  );

  // 병실 선택 로직에서 다른 관리 화면 상태 변경을 제거하여 독립적으로 작동하도록 수정
  const handleShowReservation = () => {
    if (activeItem !== "reservation") {
      setActiveItem("reservation");
    }
  };
  const handleShowTreatmentManagement = () => {
    if (activeItem !== "treatment") {
      setActiveItem("treatment");
    }
  };
  const handleShowFall = () => {
    if (activeItem !== "fall") {
      setActiveItem("fall");
    }
  };
  const handleShowWardManagement = () => {
    if (activeItem !== "ward") {
      setActiveItem("ward");
    }
  };
  const handleShowFluidManagement = () => {
    if (activeItem !== "fluid") {
      setActiveItem("fluid");
    }
  };

  const handleSelectRoom = (number) => {
    setSelectedRoomNumber(number);
  };

  const filteredRoomData = roomData.filter(
    (item) => item.roomNumber === selectedRoomNumber
  );

  const handleNoteChange = (event) => {
    setRoomNotes({
      ...roomNotes,
      [selectedRoomNumber]: event.target.value,
    });
  };

  console.log("AcctingRoom 안에 데이터" + filteredRoomData);

  console.log(uniqueRooms);
  return (
    <div className="ActtingManagement">
      <Servicebar />
      <div className="content_area">
        <div className="Actting_border">
          <div className="management_section">
            <div
              className={`management_item ${
                activeItem === "ward" ? "active" : ""
              }`}
              onClick={handleShowWardManagement}
            >
              병실관리
            </div>
            <div
              className={`management_item ${
                activeItem === "fluid" ? "active" : ""
              }`}
              onClick={handleShowFluidManagement}
            >
              수액관리
            </div>
            <div
              className={`management_item ${
                activeItem === "reservation" ? "active" : ""
              }`}
              onClick={handleShowReservation}
            >
              예약관리
            </div>
            <div
              className={`management_item ${
                activeItem === "treatment" ? "active" : ""
              }`}
              onClick={handleShowTreatmentManagement}
            >
              처치관리
            </div>
            <div
              className={`management_item ${
                activeItem === "fall" ? "active" : ""
              }`}
              onClick={handleShowFall}
            >
              욕창/낙상관리
            </div>
          </div>
          {activeItem &&
            (activeItem === "reservation" ? (
              <Reservation />
            ) : activeItem === "treatment" ? (
              <TreatmentManagement />
            ) : activeItem === "fall" ? (
              <Fall />
            ) : null)}
        </div>
        <div className="sidebar">
          <div className="circle_container">
            {uniqueRooms.map((roomNumber, index) => (
              <button
                key={index}
                className="circle"
                onClick={() => handleSelectRoom(roomNumber)}
              >
                {roomNumber}
              </button>
            ))}
          </div>
          <div className="Actting_Roominfo">
            {selectedRoomNumber && (
              <>
                <Room data={filteredRoomData} isModal={true} />
                <textarea
                  className="room_note"
                  value={roomNotes[selectedRoomNumber] || ""}
                  onChange={handleNoteChange}
                  placeholder="메모를 입력하세요..."
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_item" onClick={() => console.log("회진관리")}>
          회진관리
        </div>
        <div className="footer_item" onClick={() => console.log("액팅관리")}>
          액팅관리
        </div>
        <div className="footer_item" onClick={() => console.log("I-nurse")}>
          I-nurse
        </div>
      </div>
    </div>
  );
}

export default ActtingManagement;
