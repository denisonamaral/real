import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { HistoricalData, CreateChartProps } from "./interfaces";
import { DateTime } from "luxon";
import { Container } from "./styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function CreateChart({ fromDate, toDate, ative }: CreateChartProps) {
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);

  useEffect(() => {
    async function fetchHistoricalData() {
      try {
        const response = await api.get(
          `histoday?fsym=${ative ?? "BTC"}&tsym=BRL&limit=2000`
        );
        setHistoricalData(response.data.Data.Data);
      } catch (err) {
        console.log("Error fetchHistoricalData", err);
      }
    }
    fetchHistoricalData();
  }, [ative]);

  const oldDate = DateTime.fromJSDate(fromDate).setZone("utc").toSeconds();
  console.log(oldDate);
  const newDate = DateTime.fromJSDate(toDate).setZone("utc").toSeconds();
  // const removeMilliseconds = 1000;
  // const oldDateTimeStamp =
  //   DateTime.utc(fromDate?.getTime()).valueOf() / removeMilliseconds;

  const historicalDataCopy = historicalData;
  historicalDataCopy.forEach(
    (e) => (e.dateFormatted = DateTime.fromSeconds(e.time).toLocaleString())
  );

  const rangeHistoricalData = historicalData.filter((e) => e.time > oldDate);

  return (
    <Container>
      <ResponsiveContainer height={300}>
        <AreaChart
          data={rangeHistoricalData}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="1" />
          <XAxis dataKey="dateFormatted" hide />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip
            formatter={(value: number) =>
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(value)
            }
          />
          <Area
            name="Total"
            type="monotone"
            dataKey="close"
            stroke="#4081EC" //trocar por cor global
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
