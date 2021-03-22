import { useState } from "react";
import { ChooseDate, CreateChart } from "../../components";
import { Container } from "./styles";
import { DateTime } from "luxon";

export function Home() {
  const onYearAgo = DateTime.utc().startOf("day").minus({ year: 1 }).toJSDate();
  const dateNow = DateTime.utc().startOf("day").toJSDate();
  const [fromDate, setFromDate] = useState<Date>(onYearAgo);
  const [toDate, setToDate] = useState<Date>(dateNow);
  return (
    <Container>
      <ChooseDate date={fromDate} setDate={setFromDate} />
      <ChooseDate date={toDate} setDate={setToDate} />
      <CreateChart fromDate={fromDate} toDate={toDate} ative="BTC" />
    </Container>
  );
}
