import styled from "styled-components";
const RecordItem = ({ record }) => {
  return (
    <RecordItemContent key={record.id}>
      <RecordItemSpan>{record.item}</RecordItemSpan>
      <p>{record.description}</p>
      <p>{record.amount}</p>
      <p>{record.date}</p>
    </RecordItemContent>
  );
};

export default RecordItem;

const RecordItemContent = styled.li`
  border: 1px solid;
  margin: 5px;
  padding: 3px;
`;

const RecordItemSpan = styled.span`
  font-size: 1rem;
  font-weight: 900;
`;
