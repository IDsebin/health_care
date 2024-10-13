import React from "react";
import "./Reservation.css";

function Reservation() {
  return (
    <div className="Reservation_Box">
      <table className="management_table">
        <thead>
          <tr>
            <th>병실</th>
            <th>성명</th>
            <th>주치의</th>
            <th>예약검사</th>
            <th>검사정보</th>
            <th>M전송</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, idx) => (
            <tr key={idx}>
              <td>101</td>
              <td>홍길동</td>
              <td>김의사</td>
              <td>2024-05-10</td>
              <td>혈액검사</td>
              <td>완료</td>
              <td>주의사항 메모</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="Accting_all">병동전체</div>
      <table className="management_table">
        <thead>
          <tr>
            <th>병실</th>
            <th>성명</th>
            <th>주치의</th>
            <th>예약검사</th>
            <th>검사정보</th>
            <th>M전송</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(14)].map((_, idx) => (
            <tr key={idx}>
              <td>101</td>
              <td>홍길동</td>
              <td>김의사</td>
              <td>2024-05-10</td>
              <td>혈액검사</td>
              <td>완료</td>
              <td>주의사항 메모</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservation;
