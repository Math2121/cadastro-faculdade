import { Container } from "./styles";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";
interface IList {
  line_number: string;
  chip_number: string;
  id: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;
}
interface ILisTelephone{
  onHandleChange:(id:string) => void;
  onHandleDelete:(id:string) => void;
}
function ListTelephone({onHandleChange,onHandleDelete}:ILisTelephone) {
  const [data, setData] = useState<IList[]>([]);
  useEffect(() => {
    const base = `http://localhost:3333/telephoneline`;

    axios
      .get(base)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        console.log("ok");
      });
  }, []);
console.log(data)
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Número da linha</td>
            <td>Plano de dados</td>
            <td>Número do chip</td>
            <td>Número da Conta</td>
            <td>Operadora</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.line_number}</td>
              <td>{item.data_plan}</td>
              <td>{item.account_number}</td>
              <td>{item.telephone_operator}</td>
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

export default ListTelephone;
