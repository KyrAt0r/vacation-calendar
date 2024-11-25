import { createStore, createEvent } from "effector";

// События
export const setSelectedYear = createEvent<number>();

// Статический массив годов (от текущего года - 0, до +2)
const currentYear = new Date().getFullYear();
export const yearArray = Array.from({ length: 3 }, (_, i) => currentYear + i);

// Состояние с текущим годом по умолчанию
export const $selectedYear = createStore<number>(currentYear)
  .on(setSelectedYear, (_, year) => year);
