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
      <FormField>
        <label>날짜</label>
        <input
          type="date"
          value={date}
          placeholder="날짜"
          onChange={(e) => setDate(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>항목</label>
        <input
          type="text"
          value={item}
          placeholder="항목"
          onChange={(e) => setItem(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>금액</label>
        <input
          type="text"
          value={amount}
          placeholder="금액을 입력해주세요."
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>내용</label>
        <input
          type="text"
          value={description}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormField>
      <SubmitButton type="submit">저장</SubmitButton>
    </RecordFormWrapper>
  );
};

export default RecordForm;

const RecordFormWrapper = styled.form`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  input::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
