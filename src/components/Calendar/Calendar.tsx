import "./Calendar.css";

import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ru } from "date-fns/locale";

export const Calendar = ({ month }: { month: string }) => {
  const parsedDate = parse(month, "LLLL yyyy", new Date(), { locale: ru });

  const parsedMonth = parsedDate.getMonth();

  const firstDayOfMonth = startOfMonth(parsedDate);
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);

  const startDate = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const endDate = addDays(
    lastDayOfMonth,
    6 - (lastDayOfMonth.getDay() === 0 ? 6 : lastDayOfMonth.getDay() - 1),
  );

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weeks = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <h3 style={{ textAlign: "center" }}>{month}</h3>
        </div>
        <div className="calendar-grid">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <div
              key={day}
              className={`calendar-cell header ${
                day === "Сб" || day === "Вс" ? "weekend" : ""
              }`}
            >
              {day}
            </div>
          ))}
          {days.map((day, key) => (
            <div
              key={key}
              className={`calendar-cell ${
                day.getMonth() === parsedMonth ? "current-month" : "other-month"
              } ${day.getDay() === 6 || day.getDay() === 0 ? "weekend" : ""}`}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
