import RecordItem from "./RecordItem";

const RecordList = ({ records }) => {
  return (
    <ul>
      {records.map((record) => {
        return <RecordItem key={record.id} record={record} />;
      })}
    </ul>
  );
};

export default RecordList;
