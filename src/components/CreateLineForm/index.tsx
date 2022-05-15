import axios from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
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
function CreateLineForm() {
  const [cpf, setCpf] = useState("");
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
    // const data = {
    //   cpf,
    //   name,
    //   sector,
    //   company,
    // };
    // if (status) {
    //   setTimeout(async () => {
    //     await axios.put(`http://localhost:4000/users/${status}`, data);
    //     setLoading(false);
    //     window.location.reload()
    //   }, 5000);
    // } else {
    //   setTimeout(() => {
    //     useRequest<Object>("users", data);
    //     setLoading(false);
    //   }, 5000);
    // }
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = async (id: string) => {
    setStatus(id);
    // const { data }: any = await axios.get<IData>(
    //   `http://localhost:4000/users/${id}`
    // );
    // setName(data.name);
    // setSector(data?.sector);
    // setCompany(data?.company);
    // setCpf(data?.cpf);
  };

  const handleDelete = async (id: string) => {
    // const base = `http://localhost:4000/users/${id}`;
    // axios
    //   .delete(base)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  
  }
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
          <label htmlFor="cpf">Plano de Dados</label>
          <input
            type="text"
            name="data_plan"
            id="data_plan"
            value={data_plan}
            onChange={(e) => setDataPlan(e.target.value)}
          />
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
          <label htmlFor="cpf">Operadora</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={telephone_operator}
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
        </div>

      

   

       

        <button type="submit" className="btn">
          {loading ? <span className="lds-dual-ring" /> : "Enviar"}
        </button>
      </FormUser>
{/* 
      <ListUsers onHandleChange={handleChange}  onHandleDelete={handleDelete}/> */}
    </Container>
  );
}

export default CreateLineForm;
