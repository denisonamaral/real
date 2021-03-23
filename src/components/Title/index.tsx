import React from "react";
import { TitleProps } from "./interfaces";
import { TitleContainer } from "./styles";

export function Title({ name, value }: TitleProps) {
  return (
    <TitleContainer>
      <h4>{name}</h4>
      <span>{value}</span>
    </TitleContainer>
  );
}
