import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecordsContext } from "./contexts/RecordsContext";
import fakeData from "./data/fakeData.json";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  const [records, setRecords] = useState([]);

  // 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedRecords = localStorage.getItem("records");

    if (!storedRecords) {
      localStorage.setItem("records", JSON.stringify(fakeData));
    }

    setRecords(JSON.parse(storedRecords));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/record/:recordId",
      element: <DetailPage />,
    },
  ]);

  return (
    <RecordsContext.Provider value={{ records, setRecords }}>
      <RouterProvider router={router} />
    </RecordsContext.Provider>
  );
}

export default App;
