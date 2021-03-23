import React from "react";
import { ChooseDateProps } from "./interfaces";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function ChooseDate({ date, setDate }: ChooseDateProps) {
  return (
    <DatePicker
      selected={date}
      onChange={(date: Date) => setDate(date)}
      dateFormat="dd/MM/yyyy"
    />
  );
}
