import { api } from "../../services/api";
import { useEffect, useState, memo } from "react";
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

const Component = ({
  fromDate,
  toDate,
  ative,
  setFirstAndLastClosePrice,
}: CreateChartProps) => {
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  useEffect(() => {
    async function fetchHistoricalData() {
      try {
        const response = await api.get(
          `histoday?fsym=${ative ?? "BTC"}&tsym=BRL&limit=2000`
        );
        const data: HistoricalData[] = response.data.Data.Data;
        data.forEach(
          (e) =>
            (e.dateFormatted = DateTime.fromSeconds(e.time).toLocaleString())
        );
        const initialDate = DateTime.fromJSDate(fromDate)
          .setZone("utc")
          .toSeconds();
        const finalDate = DateTime.fromJSDate(toDate)
          .setZone("utc")
          .toSeconds();
        const rangeHistoricalData = data.filter(
          (e) => e.time >= initialDate && e.time <= finalDate
        );
        setHistoricalData(rangeHistoricalData);
        const removeIndex = 1;
        setFirstAndLastClosePrice({
          firstClose: rangeHistoricalData[0].close,
          lastClose:
            rangeHistoricalData[rangeHistoricalData.length - removeIndex].close,
        });
      } catch (err) {
        console.log("Error fetchHistoricalData", err);
      }
    }
    fetchHistoricalData();
  }, [ative, fromDate, toDate, setFirstAndLastClosePrice]);
  return (
    <Container>
      <ResponsiveContainer height={300}>
        <AreaChart
          data={historicalData}
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
};

export const CreateChart = memo(Component);
