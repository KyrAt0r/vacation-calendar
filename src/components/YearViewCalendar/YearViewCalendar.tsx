import {Calendar} from "@components/Calendar/Calendar.tsx";
import {$selectedYear} from "@components/YearSelector/store.ts";
import { Col, Row } from "antd";
import { format } from "date-fns";
import {ru} from "date-fns/locale";
import {useUnit} from "effector-react";

import { YearSelector } from "../YearSelector/YearSelector.tsx";

export const YearViewCalendar = () => {
  const selectedYear = useUnit($selectedYear);

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(selectedYear, i, 1);
    const monthName = format(date, "MMMM", { locale: ru });
    const year = format(date, "yyyy");
    return (
      monthName.charAt(0).toUpperCase() + monthName.slice(1) + ` ${year}`
    );
  });

  const rows = [months.slice(0, 6), months.slice(6)];

  return (
    <div style={{ padding: "20px" }}>
      <YearSelector />
      <hr />
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} gutter={[10, 10]} justify="center">
          {row.map((month, key) => (
            <Col key={key} span={4}>
              <Calendar month={month}/>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};
