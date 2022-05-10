import { ReactNode } from "react";

import { Container } from "./styles";
import { FaEdit,FaTrashAlt } from "react-icons/fa";
interface ListUsersProps {
  children: ReactNode;
}

function ListUsers() {
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default ListUsers;
