import { Contract, ethers } from "ethers";
import CompanyFactoryContract from "@/contracts/CompanyFactory.json";

export const useCompanyFactory = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://tame-cosmopolitan-violet.matic-testnet.discover.quiknode.pro/3e6de038de14a63965f8bd96cc3c52b4d32fc918/"
  );
  const companyContract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    // CompanyFactoryContract.address,
    CompanyFactoryContract.abi,
    provider
  );

  return { companyContract };
};
