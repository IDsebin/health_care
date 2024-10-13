import "./Right.css";
import image10 from "../image/side-img/10.png";
import image20 from "../image/side-img/20.png";
import oxgen from "../image/side-img/oxgen.png";
import fluidNomal from "../image/side-img/fluid_nomal.png";
import heartNomal from "../image/side-img/heart_nomal.png";
import React, { useState, useEffect } from "react";

function Right({ data, selectedRadio, mainDoctor,isModal }) {
  let therapyOrder = "";
  let oxygenYes = "";
  let fluid_nomal = "";
  let heart_nomal = "";

  const [barStatusImage, setBarStatusImage] = useState("");
  const [positionStatusGif, setPositionStatusGif] = useState("");
  const [fluidImage, setFluidImage] = useState(fluidNomal);
  const [textColor, setTextColor] = useState("white");

  const isVisible =
    isModal ||
    (!(
      (selectedRadio === "3" &&
        (data.barStatus === "1111" || data.barStatus === "2211")) ||
      (selectedRadio === "2" && data.fluidAlert === "fluid_out")
    ) &&
      (mainDoctor === "" || data.doctorName === mainDoctor));

  const containerStyle = {
    visibility: isVisible ? "visible" : "hidden",
  };

  const isFluidVisible = !(
    selectedRadio === "2" && data.fluidAlert === "fluid_out"
  );

  const fluidImageStyle = {
    visibility: isFluidVisible ? "visible" : "hidden",
  };
  const rightTopClass = barStatusImage
    ? "Right_LeftTop no-border"
    : "Right_LeftTop";

  useEffect(() => {
    async function fetchImages() {
      if (data.barStatus) {
        try {
          const barImage = await import(
            `../image/Back-img/${data.barStatus}.png`
          );
          setBarStatusImage(barImage.default);
        } catch (error) {
          console.log("Failed to load bar status image:", error);
          setBarStatusImage("");
        }
      }

      if (data.positionStatus) {
        try {
          const posImage = await import(
            `../image/Image/${data.positionStatus}.gif`
          );
          setPositionStatusGif(posImage.default);
        } catch (error) {
          console.log("Failed to load position status gif:", error);
          setPositionStatusGif("");
        }
      }
      if (data.fluidAlert) {
        try {
          const dynamicFluidImage = await import(
            `../image/side-img/${data.fluidAlert}.png`
          );
          setFluidImage(dynamicFluidImage.default);
          if (data.fluidAlert === "fluid_out") {
            setTextColor("yellow");
          } else {
            setTextColor("white");
          }
        } catch (error) {
          console.log("Failed to load fluid image based on alert:", error);
          setFluidImage(fluidNomal);
          setTextColor("white");
        }
      }
    }

    fetchImages();
  }, [data.barStatus, data.positionStatus, data.fluidAlert]);

  if (data.therapyOrder === 10) {
    therapyOrder = image10;
  } else if (data.therapyOrder === 20) {
    therapyOrder = image20;
  }

  if (data.oxygenYes === 1) {
    oxygenYes = oxgen;
  }

  if (data.ecgRate && data.breathRate != null) {
    //수액 이미지 출력 (여기서 nomal이랑 out 값 바꾸려면 기준이 필요함)
    fluid_nomal = fluidNomal;
  }

  if (data.fluidEtime && data.fluidSpeed != null) {
    heart_nomal = heartNomal;
  }

  console.log(data.oxygenYes);
  return (
    <div className="Right_Container" style={containerStyle}>
      <div className="Right_Left">
        <div className="Right_LeftTop">
          <div className="Right_Space3">
            {therapyOrder && <img src={therapyOrder} alt="Therapy Image" />}
          </div>
          <div className="Right_Space3">
            {oxygenYes && <img src={oxygenYes} alt="oxgenYes Image" />}
          </div>
        </div>
        <div className="Right_LeftBottom" />
      </div>
      <div className="Right_Right">
        <div className="Right_RightTop">
          {barStatusImage && (
            <img
              src={barStatusImage}
              alt={`Status ${data.barStatus}`}
              className="base-image"
            />
          )}
          {positionStatusGif && (
            <img
              src={positionStatusGif}
              alt={`Position ${data.positionStatus}`}
              className="overlay-gif"
            />
          )}
        </div>
        <div className="Right_RightBottom">
          <div className="Right_Space1">
            {isFluidVisible && fluidImage && (
              <img src={fluidImage} alt="Fluid Status Image" />
            )}
          </div>
          <div className="Right_Space2" style={{ color: textColor }}>
            {data.ecgRate}/{data.breathRate}
          </div>
          <div className="Right_Space1">
            {heart_nomal && <img src={heart_nomal} alt="heart_nomal Image" />}
          </div>
          <div className="Right_Space2">
            {data.fluidEtime}/{data.fluidSpeed}
          </div>
        </div>
      </div>
      <div className="Right_Hover_Info">
        <div>Name: {data.patName}</div>
        <div>ID: {data.patNumber}</div>
      </div>
    </div>
  );
}
export default Right;
