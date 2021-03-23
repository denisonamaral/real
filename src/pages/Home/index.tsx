import { useState } from "react";
import { ChooseDate, CreateChart, Details } from "../../components";
import { Container } from "./styles";
import { DateTime } from "luxon";
import { FirstAndLastClose } from "./interfaces";

export function Home() {
  const onYearAgo = DateTime.now().startOf("day").minus({ year: 1 }).toJSDate();
  const dateNow = DateTime.now().startOf("day").toJSDate();
  const [fromDate, setFromDate] = useState<Date>(onYearAgo);
  const [toDate, setToDate] = useState<Date>(dateNow);
  const [
    firstAndLastClosePrice,
    setFirstAndLastClosePrice,
  ] = useState<FirstAndLastClose>({ lastClose: 0, firstClose: 0 });
  return (
    <Container>
      <Details firstAndLastClosePrice={firstAndLastClosePrice} />
      <ChooseDate date={fromDate} setDate={setFromDate} />
      <ChooseDate date={toDate} setDate={setToDate} />
      <CreateChart
        fromDate={fromDate}
        toDate={toDate}
        ative="BTC"
        setFirstAndLastClosePrice={setFirstAndLastClosePrice}
      />
    </Container>
  );
}
