import React from "react";
import "./Fall.css";

function Fall() {
  return (
    // JSX를 반환하기 위해 return 추가
    <div className="Fall_Box">
      <table className="management_table">
        <thead>
          <tr>
            <th>병실</th>
            <th>성명</th>
            <th>주치의</th>
            <th>욕창G</th>
            <th>낙상G</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, idx) => (
            <tr key={idx}>
              <td>101</td>
              <td>홍길동</td>
              <td>김의사</td>
              <td>아무 내용 </td>
              <td>아무내용</td>
              <td>주의사항 메모</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="Fall_all">병동전체</div>
      <table className="management_table">
        <thead>
          <tr>
            <th>병실</th>
            <th>성명</th>
            <th>주치의</th>
            <th>욕창G</th>
            <th>낙상G</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(14)].map((_, idx) => (
            <tr key={idx}>
              <td>101</td>
              <td>홍길동</td>
              <td>김의사</td>
              <td>아무 내용 </td>
              <td>아무내용</td>
              <td>주의사항 메모</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fall;
