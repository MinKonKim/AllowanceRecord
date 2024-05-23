import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../components/DetailPageComponents/Modal";
import { RecordsContext } from "../../contexts/RecordsContext";
import useInput from "../../hooks/useInput";
import ValidCheck from "../../utils/ValidCheck";

const DetailPage = () => {
  // 파라미터 값 받아오기
  const { recordId } = useParams();
  const record = records.find((ele) => ele.id === recordId);

  // Context API
  const { records, setRecords } = useContext(RecordsContext);

  // Modal Open 관련 State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 히스토리

  // Custom Hook 사용
  const [item, onChangeItemHandler] = useInput(record.item);
  const [amount, onChangeAmountHandler] = useInput(record.amount);
  const [date, onChangeDateHandler] = useInput(record.date);
  const [description, onChangeDescriptionHandler] = useInput(
    record.description
  );
  // 수정
  const updateRecord = () => {
    const updatedRecord = {
      id: recordId,
      item: item,
      amount: amount,
      date: date,
      description: description,
    };
    //  유효성 검사
    if (ValidCheck(updateRecord)) {
      const updatedRecords = [
        ...records.filter((record) => record.id !== recordId),
        updatedRecord,
      ];

      setRecords(updatedRecords);
      alert("수정완료!");
    }
  };

  //삭제
  const deleteRecord = () => {
    const deletedRecords = [
      ...records.filter((record) => record.id !== recordId),
    ];

    setRecords(deletedRecords);

    setIsModalOpen(false);
  };

  // record가 없다면,
  if (!record) {
    return <div>내용이 없습니다.</div>;
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={deleteRecord}
          message={"진짜로 삭제할겁니까?"}
        />
      )}
      <DetailContainer>
        <h1>상세 정보</h1>
        <RecordDetail>
          <div>
            <label>항목: </label>
            <input type="text" value={item} onChange={onChangeItemHandler} />
          </div>
          <div>
            <label>금액: </label>
            <input
              type="text"
              value={amount}
              onChange={onChangeAmountHandler}
            />
          </div>
          <div>
            <label>날짜: </label>
            <input type="date" value={date} onChange={onChangeDateHandler} />
          </div>
          <div>
            <label>내용: </label>
            <input
              type="text"
              value={description}
              onChange={onChangeDescriptionHandler}
            />
          </div>
        </RecordDetail>
        <ButtonContainer>
          <Button onClick={updateRecord}>수정</Button>
          <Button onClick={() => setIsModalOpen(true)}>삭제</Button>
        </ButtonContainer>
      </DetailContainer>
    </>
  );
};

export default DetailPage;
// styled Components
const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const RecordDetail = styled.div`
  margin-bottom: 20px;
  margin-top: 15px;
  & > div {
    margin-bottom: 10px;
  }

  label {
    display: inline-block;
    width: 80px;
    font-weight: bold;
  }

  input {
    width: calc(100% - 90px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-right: 10px;
  }
`;
