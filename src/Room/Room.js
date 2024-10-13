import React, { useState } from "react";
import "./Room.css";
import RoomModal from "../Modal/RoomModal";
import Left from "./Left";
import Right from "./Right";

function Room({ data, selectedRadio, mainDoctor, isModal}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const roomNumber = data[0].roomNumber;

  console.log("Selected Radio in Room:", selectedRadio);
  console.log(mainDoctor);

  console.log("Room에서의 데이터:", data);

  return (
    <div>
      <div className="Room_Container" onClick={toggleModal}>
        <div className="Room_Contents">
          {data.map((item, index) => {
            const Component = index % 2 === 0 ? Left : Right;
            return (
              <Component
                key={item.id}
                data={item}
                selectedRadio={selectedRadio}
                mainDoctor={mainDoctor}
                isModal={isModal}
              />
            );
          })}
        </div>
        <div className="Room_Number">Room {roomNumber}</div>
      </div>

      {isModalOpen && (
        <RoomModal
          data={data}
          roomNumber={roomNumber}
          close={toggleModal}
          isModal={true}
        />
      )}
    </div>
  );
}

export default Room;
