import {
  $selectedYear,
  setSelectedYear,
  yearArray,
} from "@components/YearSelector/store.ts";
import { Select } from "antd";
import { format } from "date-fns";
import { useUnit } from "effector-react";

const { Option } = Select;

export const YearSelector = () => {
  const selectedYear = useUnit($selectedYear);

  const handleChangeYear = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <Select
      placeholder="Select a year"
      value={selectedYear}
      onChange={handleChangeYear}
    >
      {yearArray.map((year) => (
        <Option key={year} value={year}>
          {format(new Date(year, 0, 1), "yyyy")}
        </Option>
      ))}
    </Select>
  );
};
