import { YearViewCalendar } from "@components/YearViewCalendar/YearViewCalendar.tsx";
import { attachLogger } from "effector-logger";

attachLogger();

function App() {
  return (
    <>
      <YearViewCalendar />
      <hr />
    </>
  );
}

export default App;
