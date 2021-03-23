export interface DetailsProps {
  firstAndLastClosePrice: {
    firstClose: number;
    lastClose: number;
  };
  ative: string;
  setAtive: (ative: string) => void;
}
