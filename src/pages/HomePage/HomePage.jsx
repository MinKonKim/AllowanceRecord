import RecordForm from "../../components/HomePageComponents/RecordForm";
import RecordList from "../../components/HomePageComponents/RecordList";

const HomePage = ({ records, setRecords }) => {
  return (
    <div>
      <h1>HomePage</h1>
      <RecordForm setRecords={setRecords} />
      <RecordList records={records} />
    </div>
  );
};

export default HomePage;
