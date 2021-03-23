import { useState, useEffect } from "react";
import { DetailsProps } from "./interfaces";

export function Details({ firstAndLastClosePrice }: DetailsProps) {
  const [startingAmount, setStartingAmount] = useState<number>(10000);
  const [percentGain, setPercentGain] = useState<number>(0);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setStartingAmount(event.currentTarget.valueAsNumber);
  };
  const [amountCoin, setAmountCoin] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const amountBTC = startingAmount / firstAndLastClosePrice.firstClose;
    setAmountCoin(amountBTC);

    const valorPatrimonialHoje = amountBTC * firstAndLastClosePrice.lastClose;
    setTotal(valorPatrimonialHoje);

    const ganhoEmPercentual =
      ((valorPatrimonialHoje - startingAmount) / startingAmount) * 100;
    setPercentGain(ganhoEmPercentual);
  }, [firstAndLastClosePrice, startingAmount]);
  return (
    <div>
      <label>Valor investido (BRL): </label>
      <input
        type="number"
        value={startingAmount}
        onChange={(event) => {
          handleChange(event);
        }}
      ></input>
      <h4>
        Qtd BTC:{" "}
        {new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 6 }).format(
          amountCoin
        )}
      </h4>
      <h4>
        Valor patrimonial final:
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)}
      </h4>
      <h4>
        Ganho (%):
        {new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 }).format(
          percentGain
        )}
        %
      </h4>
    </div>
  );
}
