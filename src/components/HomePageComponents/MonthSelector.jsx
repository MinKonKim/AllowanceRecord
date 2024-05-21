import styled from "styled-components";

const MonthSelector = ({ selectedMonth, onMonthClick }) => {
  const months = [
    { value: "2024-01", label: "1월" },
    { value: "2024-02", label: "2월" },
    { value: "2024-03", label: "3월" },
    { value: "2024-04", label: "4월" },
    { value: "2024-05", label: "5월" },
    { value: "2024-06", label: "6월" },
    { value: "2024-07", label: "7월" },
    { value: "2024-08", label: "8월" },
    { value: "2024-09", label: "9월" },
    { value: "2024-10", label: "10월" },
    { value: "2024-11", label: "11월" },
    { value: "2024-12", label: "12월" },
  ];

  return (
    <>
      <h2>월별</h2>
      <ButtonWrapper>
        {months.map((month) => (
          <Button
            key={month.value}
            onClick={() => onMonthClick(month.value)}
            selected={selectedMonth === month.value}
          >
            {month.label}
          </Button>
        ))}
        <Button
          onClick={() => onMonthClick("")}
          selected={selectedMonth === ""}
        >
          All
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default MonthSelector;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#74b9ff" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#0984e3")};
  padding: 10px 0;
  border: 2px solid ${(props) => (props.selected ? "#74b9ff" : "#0984e3")};
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: ${(props) =>
    props.selected ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: #0984e3;
    color: white;
    border-color: #0984e3;
  }
`;
