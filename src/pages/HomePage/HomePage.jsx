import { useContext, useState } from "react";
import Graph from "../../components/HomePageComponents/Graph";
import MonthSelector from "../../components/HomePageComponents/MonthSelector";
import RecordForm from "../../components/HomePageComponents/RecordForm";
import RecordList from "../../components/HomePageComponents/RecordList";
import { MonthContext } from "../../contexts/MonthContext";
import { RecordsContext } from "../../contexts/RecordsContext";

const HomePage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const { records } = useContext(RecordsContext);

  //월에 따른 필터
  const filteredRecords = records.filter((record) => {
    if (selectedMonth) {
      return record.date.startsWith(selectedMonth);
    }
    return true;
  });

  return (
    <div>
      <RecordForm />
      <MonthContext.Provider value={{ selectedMonth, setSelectedMonth }}>
        <MonthSelector />
        {/* 필터링된 Records를 props로 내린다. */}
        <Graph records={filteredRecords} />
        <RecordList records={filteredRecords} />
      </MonthContext.Provider>
    </div>
  );
};

export default HomePage;
