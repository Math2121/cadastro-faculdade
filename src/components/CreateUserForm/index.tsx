import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import { cnpjMask } from "../../utils/utils";
import ListUsers from "../ListUsers";
import { Container, FormUser } from "./styles";
interface IData {
  data: {
    company: string;
    cpf: string;
    id: string;
    name: string;
    sector: string;
  };
}
interface IList {
  data: {
    company: string;
    cpf: string;
    id: string;
    name: string;
    sector: string;
  };
}
function CreateUserForm() {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      cpf,
      name,
      sector,
      company,
    };
    if (status) {
      setTimeout(async () => {
        await axios.put(`http://localhost:4000/users/${status}`, data);
        setLoading(false);
        window.location.reload();
      }, 5000);
    } else {
      setTimeout(() => {
        useRequest<Object>("users", data);
        setLoading(false);
        window.location.reload();
      }, 5000);
    }
  };

  const handleChange = async (id: string) => {
    setStatus(id);
    const { data }: any = await axios.get<IData>(
      `http://localhost:4000/users/${id}`
    );
    setName(data.name);
    setSector(data?.sector);
    setCompany(data?.company);
    setCpf(data?.cpf);
  };

  const handleDelete = async (id: string) => {
    const base = `http://localhost:4000/users/${id}`;
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
      <h1>Cadastro de Usuários</h1>
      <FormUser onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={cnpjMask(cpf)}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Nome de Usuário</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="setor">Setor</label>

          <select
            name="empresa"
            id="empresa"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option value=""></option>
            <option value="RH">RH</option>
            <option value="XYZ">XYZ</option>
            <option value="TI">TI</option>
            <option value="COMPRAS">COMPRAS</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="empresa">Empresa</label>

          <select
            name="empresa"
            id="empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value=""></option>
            <option value="ABC">ABC</option>
            <option value="XYZ">XYZ</option>
            <option value="AKZ">AKZ</option>
          </select>
        </div>

        <button type="submit" className="btn">
          {loading ? <span className="lds-dual-ring" /> : "Enviar"}
        </button>
      </FormUser>

      <ListUsers onHandleChange={handleChange} onHandleDelete={handleDelete} />
    </Container>
  );
}

export default CreateUserForm;
