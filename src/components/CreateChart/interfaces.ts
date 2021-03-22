export interface HistoricalData {
  close: number;
  high: number;
  low: number;
  open: number;
  time: number;
  dateFormatted?: string;
}

export interface CreateChartProps {
  fromDate: Date;
  toDate: Date;
  ative: string;
}
