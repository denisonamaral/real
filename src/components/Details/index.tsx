import { useState, useEffect } from "react";
import { DetailsProps } from "./interfaces";
import { Container, ContainerInput } from "./styles";
import { Title } from "../../components";

export function Details({ firstAndLastClosePrice }: DetailsProps) {
  const [startingAmount, setStartingAmount] = useState<number>(10000);
  const [percentGain, setPercentGain] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);
  const [amountCoin, setAmountCoin] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setStartingAmount(event.currentTarget.valueAsNumber);
  };
  useEffect(() => {
    const qtdAtive = startingAmount / firstAndLastClosePrice.firstClose;
    setAmountCoin(qtdAtive);

    const equityValue = qtdAtive * firstAndLastClosePrice.lastClose;
    setTotal(equityValue);

    const profitObtained = equityValue - startingAmount;
    setProfit(profitObtained);

    const percentGained =
      ((equityValue - startingAmount) / startingAmount) * 100;
    setPercentGain(percentGained);
  }, [firstAndLastClosePrice, startingAmount]);
  return (
    <Container>
      <ContainerInput>
        <h4>Valor inicial investido:</h4>
        <input
          type="number"
          value={startingAmount}
          onChange={(event) => {
            handleChange(event);
          }}
        ></input>
      </ContainerInput>
      <Title
        name="Quantidade: "
        value={new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 6,
        }).format(amountCoin)}
      />
      <Title
        name="Lucro: "
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(profit)}
      />
      <Title
        name="Valor final patrimonial: "
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)}
      />
      <Title
        name="Ganho (%): "
        value={`${new Intl.NumberFormat("pt-BR", {
          maximumFractionDigits: 2,
        }).format(percentGain)}%`}
      />
    </Container>
  );
}
