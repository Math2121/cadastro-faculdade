import useAxios from "../../hooks/useAxios";

import { Container } from "./styles";
const branchData = [
  { branch: "FRJ", branchName: "Filial do Rio de Janeiro" },
  { branch: "FMG", branchName: "Filial de Minas Gerais" },
  { branch: "FSP", branchName: "Filial de São Paulo" },
];

const providersData = [
  { provider: "ABC", cnpj: "56.802.394/001-56" },
  { provider: "XYZ", cnpj: "96.802.394/001-56" },
];
interface IProviderList {
  id: string;
  employee: string;
  branchName: string;
  branch: string;
  productType: string;
  cnpj: string;
  providerName: string;
}

function ListProvider() {
  const { data } = useAxios({
    method: "GET",
    url: "/provider",
  });
  const dataProvider = data;
 const newData =  dataProvider.map((data: IProviderList) => {
    return {
      id: data.id,
      employee: data.employee,
      branchName: branchData.find((branch) =>
        branch.branch === data.branch ?? branch 
      )?.branchName,
      cnpj: providersData.find((pr) =>
      pr.provider === data.providerName ?? pr
      )?.cnpj,
      
    };
  });
  console.log(newData)
  return (
    <Container>
      <h1>ListProvider</h1>
    </Container>
  );
}

export default ListProvider;
