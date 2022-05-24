import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, LabelStyle } from "./styles";

interface TotalProps {
  id: string;
  line_number: string;
  chip_number: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;
}

function Total() {
  const [totalLineVivo, setTotalLineVivo] = useState(0);
  const [totalLineTim, setLineTotalTim] = useState(0);
  const [totalLinOi, setLineTotalOi] = useState(0);
  let telephone: TotalProps[] = [];
  let totalDDD24 = 0;
 
  async function loadTelephone() {
    let res = await api.get<TotalProps[]>("/telephoneline").then((dados) => dados.data);

    if (res.length > 0) {
      telephone = res
      telephone.map((telephone) => {
        totalDDD24 += telephone.line_number.startsWith("24") ? 1 : 0;
      });
      setTotalLineVivo(
        res.filter((line: TotalProps) => line.telephone_operator === "TIM")
          .length
      );
      setLineTotalTim(
        res.filter((line: TotalProps) => line.telephone_operator === "VIVO")
          .length
      );
      setLineTotalOi(
        res.filter((line: TotalProps) => line.telephone_operator === "OI")
          .length
      );
    }
  }

  useEffect(() => {
    loadTelephone();
  }, []);

  return (
    
    <Container>
      {totalDDD24}
      <Content>
        <LabelStyle>Total de linhas Vivo: {totalLineVivo}</LabelStyle>
        <LabelStyle>Total de linhas TIM: {totalLineTim}</LabelStyle>
        <LabelStyle>Total de linhas OI: {totalLinOi}</LabelStyle>
      </Content>

      <Content>
        <LabelStyle>Total de plano 10GB: {totalLineVivo}</LabelStyle>
        <LabelStyle>Total de plano 20GB: {totalLineVivo}</LabelStyle>
        <LabelStyle>Total de plano 30GB: {totalLineVivo}</LabelStyle>
      </Content>


      <Content>
        <LabelStyle>Total DDD 24: {totalDDD24}</LabelStyle>
     
      </Content>
    </Container>
  );
}

export default Total;
