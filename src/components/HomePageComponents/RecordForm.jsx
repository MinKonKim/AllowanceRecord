import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
// 용돈 기입
const RecordForm = ({ setRecords }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // 오늘 날짜로 지정
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
  }, []);

  // Record 추가 함수
  const addRecord = (e) => {
    e.preventDefault(); // 폼 제출 막기
    const newRecord = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };
    // 유효성 검사 해야함.
    setRecords((prev) => [...prev, newRecord]);
    // 날짜를 제외하고 초기화
    setItem("");
    setAmount("");
    setDescription("");
  };
  return (
    <RecordFormWrapper onSubmit={addRecord}>
      <div>
        <label>날짜</label>
        <input
          type="date"
          value={date}
          placeholder="날짜"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>항목</label>
        <input
          type="text"
          value={item}
          placeholder="항목"
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div>
        <label>금액</label>
        <input
          type="text"
          value={amount}
          placeholder="금액을 입력해주세요."
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>내용</label>
        <input
          type="text"
          value={description}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" onClick={addRecord}>
        저장
      </button>
    </RecordFormWrapper>
  );
};

export default RecordForm;

const RecordFormWrapper = styled.form`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;
