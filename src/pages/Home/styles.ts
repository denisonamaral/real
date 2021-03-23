import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDate = styled.div`
  padding: 10px;
  background-color: var(--background-items);
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const Dates = styled.div`
  margin-top: 10px;
  background-color: var(--background-items);
  padding: 10px;
  border-radius: 10px;
`;

export const Header = styled.div`
  height: 200px;
  width: 100%;
  background-color: var(--blue);
`;

export const ContainerChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
