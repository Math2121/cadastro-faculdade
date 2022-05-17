import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRequest } from "../../hooks/useRequest";
import ListTelephone from "../ListTelephone";

import { Container, FormUser } from "./styles";
interface IData {
  data: {
    line_number: string;
    chip_number: string;
    id: string;
    data_plan: string;
    account_number: string;
    telephone_operator: string;
  };
}
function CreateLineForm() {
  const [line_number, setLineNumber] = useState("");
  const [chip_number, setChipNumber] = useState("");
  const [data_plan, setDataPlan] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [telephone_operator, setTelephoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      line_number,
      chip_number,
      data_plan,
      account_number,
      telephone_operator,
    };
    if (status) {
      setTimeout(async () => {
        await axios.put(`http://localhost:3333/telephoneline/${status}`, data);
        setLoading(false);
        window.location.reload();
      }, 5000);
    } else {
      setTimeout(() => {
        useRequest<Object>("telephoneline", data);
        setLoading(false);
        window.location.reload();
      }, 5000);
    }
  };

  const handleChange = async (id: string) => {
    setStatus(id);
    const { data }: any = await axios.get<IData>(
      `http://localhost:3333/telephoneline/${id}`
    );
    setLineNumber(data?.line_number);
    setChipNumber(data?.chip_number);
    setDataPlan(data?.data_plan);
    setAccountNumber(data?.account_number);
    setTelephoneNumber(data?.telephone_operator);
  };

  const handleDelete = async (id: string) => {
    const base = `http://localhost:3333/telephoneline/${id}`;
    axios
      .delete(base)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <h1>Cadastro de Linha</h1>
      <FormUser onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="cpf">Número da Linha</label>
          <input
            type="text"
            name="line_number"
            id="line_number"
            value={line_number}
            onChange={(e) => setLineNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="cpf">Número do Chip</label>
          <input
            type="text"
            name="chip_number"
            id="chip_number"
            value={chip_number}
            onChange={(e) => setChipNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="data_plan">Plano de Dados</label>
          <select
            name="data_plan"
            id="data_plan"
            value={data_plan}
            onChange={(e) => setDataPlan(e.target.value)}
          >
            <option value=""></option>
            <option value="20GB">20GB</option>
            <option value="30GB">30GB</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="account_number">Número da conta</label>
          <input
            type="text"
            name="account_number"
            id="account_number"
            value={account_number}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="telephone_operator">Operadora</label>
          <select
            name="telephone_operator"
            id="telephone_operator"
            value={telephone_operator}
            onChange={(e) => setTelephoneNumber(e.target.value)}
          >
            <option value=""></option>
            <option value="VIVO">VIVO</option>
            <option value="CLARO">CLARO</option>
            <option value="TIM">TIM</option>
          </select>
        </div>

        <button type="submit" className="btn">
          {loading ? <span className="lds-dual-ring" /> : "Enviar"}
        </button>
      </FormUser>

      <ListTelephone
        onHandleChange={handleChange}
        onHandleDelete={handleDelete}
      />
    </Container>
  );
}

export default CreateLineForm;
