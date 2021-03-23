import { useState } from "react";
import { ChooseDate, CreateChart, Details } from "../../components";
import {
  Container,
  ContainerDate,
  Dates,
  Header,
  ContainerChart,
} from "./styles";
import { DateTime } from "luxon";
import { FirstAndLastClose } from "./interfaces";
import logo from "../../assets/logo-real-valor.png";

export function Home() {
  const onYearAgo = DateTime.now().startOf("day").minus({ year: 1 }).toJSDate();
  const dateNow = DateTime.now().startOf("day").toJSDate();
  const [fromDate, setFromDate] = useState<Date>(onYearAgo);
  const [toDate, setToDate] = useState<Date>(dateNow);
  const [
    firstAndLastClosePrice,
    setFirstAndLastClosePrice,
  ] = useState<FirstAndLastClose>({ lastClose: 0, firstClose: 0 });
  const [ative, setAtive] = useState<string>("BTC");
  return (
    <Container>
      <Header>
        <img src={logo} alt="real-valor-logo" />
      </Header>
      <Details
        firstAndLastClosePrice={firstAndLastClosePrice}
        setAtive={setAtive}
        ative={ative}
      />
      <Dates>
        <ContainerDate>
          <h4>Data inicial</h4>
          <ChooseDate date={fromDate} setDate={setFromDate} />
        </ContainerDate>
        <ContainerDate>
          <h4>Data final</h4>
          <ChooseDate date={toDate} setDate={setToDate} />
        </ContainerDate>
      </Dates>
      <ContainerChart>
        <CreateChart
          fromDate={fromDate}
          toDate={toDate}
          ative={ative}
          setFirstAndLastClosePrice={setFirstAndLastClosePrice}
        />
      </ContainerChart>
    </Container>
  );
}
