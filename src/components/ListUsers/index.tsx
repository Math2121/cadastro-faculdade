import { ReactNode } from "react";

import { Container } from "./styles";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
interface IList {
  company: string;
  cpf: string;
  id: string;
  name: string;
  sector: string;
}
interface ILisUser{
  onHandleChange:(id:string) => void;
  onHandleDelete:(id:string) => void;
}
function ListUsers({onHandleChange,onHandleDelete}:ILisUser) {
  const { data } = useFetch<IList[]>("users");
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>CPF</td>
            <td>Nome</td>
            <td>Setor</td>
            <td>Empresa</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.cpf}</td>
              <td>{item.name}</td>
              <td>{item.sector}</td>
              <td>{item.company}</td>
              <td>
                <button type="button" onClick={() =>onHandleChange(item.id)}>
                  <FaEdit />
                </button>
                <button type="button" onClick={() =>onHandleDelete(item.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default ListUsers;
