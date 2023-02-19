import { Contract, ethers } from "ethers";
import CompanyFactoryContract from "@/contracts/CompanyFactory.json";

export const useCompanyFactory = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://tame-cosmopolitan-violet.matic-testnet.discover.quiknode.pro/3e6de038de14a63965f8bd96cc3c52b4d32fc918/"
  );
  const companyFactoryContract = new Contract(
    CompanyFactoryContract.address,
    CompanyFactoryContract.abi,
    provider
  );

  const createCompany = async (name: string): Promise<string> => {
    const companyAddress = await companyFactoryContract.functions.createCompany(name);
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address: companyAddress,
      }),
    });
    return companyAddress;
  };

  return { companyFactoryContract, createCompany };
};
