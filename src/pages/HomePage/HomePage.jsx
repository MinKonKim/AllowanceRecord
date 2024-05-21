import { useState } from "react";
import MonthSelector from "../../components/HomePageComponents/MonthSelector";
import RecordForm from "../../components/HomePageComponents/RecordForm";
import RecordList from "../../components/HomePageComponents/RecordList";

const HomePage = ({ records, setRecords }) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  //월에 따른 필터
  const filteredRecords = records.filter((record) => {
    if (selectedMonth) {
      return record.date.startsWith(selectedMonth);
    }
    return true;
  });

  return (
    <div>
      <h1>HomePage</h1>
      <RecordForm setRecords={setRecords} />
      <MonthSelector
        selectedMonth={selectedMonth}
        onMonthClick={setSelectedMonth}
      />
      <RecordList records={filteredRecords} />
    </div>
  );
};

export default HomePage;
