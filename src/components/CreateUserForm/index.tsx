import { ReactNode, useState } from "react";
import { cnpjMask } from "../../utils/utils";
import ListUsers from "../ListUsers";
import { Container, FormUser } from "./styles";

interface CreateUserFormProps {
  children: ReactNode;
}

function CreateUserForm() {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [company, setCompany] = useState("");
  return (
    <Container>
      <h1>Cadastro de Usuários</h1>
      <FormUser>
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
          Enviar
        </button>
      </FormUser>

      <ListUsers />
    </Container>
  );
}

export default CreateUserForm;
