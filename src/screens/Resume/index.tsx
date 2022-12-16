import React from "react";

import { HistoryCard } from "../../components/HistoryCard";

import {
  Container,
  Header,
  Title,
} from './styles'

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard
        color="red"
        title="Carro"
        amount="100"
      />
    </Container>
  )
}