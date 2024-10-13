import React from "react";
import "./RoomModal.css";
import Left from "../Room/Left";
import Right from "../Room/Right";

function RoomModal({ data, roomNumber, close}) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Room {roomNumber}</h2>
        </div>
        <div className="Room_Contents">
          {data.map((item, index) => {
            const Component = index % 2 === 0 ? Left : Right;
            return (
              <Component
                key={item.id}
                data={item}
                isModal={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoomModal;
