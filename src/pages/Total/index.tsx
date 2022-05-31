import { useState, useEffect } from "react";
import { Container, Content, Title } from "./styles";
import {api} from '../../services/api'


interface ITotal {
  id: string;
  line_number: string;
  chip_number: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;
}

export function Total() {
  const [telefonia, setTelefonia] = useState<ITotal[]>([]);

  async function loadTelephone() {
    const dataTelephone = await api.get("/telephoneline")
      .then((dados) => dados.data);
    if (dataTelephone) {
      setTelefonia(dataTelephone);
    }
  }
  const totalLinhas = (operator: string) => {
    return telefonia.filter((tel) => tel.telephone_operator === operator)
      .length;
  };
  const totalPlan = (plan: string) => {
    return telefonia.filter((tel) => tel.data_plan === plan)
      .length;
  };
console.log(telefonia)
  useEffect(() => {
    loadTelephone();
  }, []);

  return (
    <Container>
      <Content>
        <Title>
          Total de linhas Vivo:
          {totalLinhas("VIVO")}
        </Title>

        <Title>
          Total de linhas Claro:
          {totalLinhas("CLARO")}
        </Title>


        <Title>
          Total de linhas TIM:
          {totalLinhas("TIM")}
        </Title>
      </Content>


      <Content>
        <Title>
        Total de 30GB :
          {totalPlan("20GB")}
        </Title>

        <Title>
          Total de 20GB :
          {totalPlan("30GB")}
        </Title>


      </Content>
    </Container>
  );
}
