import PapaParse from "papaparse";
import { Contract, ethers } from "ethers";

import CompanyContract from "@/contracts/Company.json";
import { useState } from "react";

interface EmployeeData {
  employeeAddress: string;
  pensionStartDate: number;
  pensionDuration: number;
  monthyAmount: number;
  employeeJoiningDate: number;
  employeeLeavingDate: number;
  minimumServiceRequired: number;
}

export const useCompany = () => {
  const [companyContract, setCompanyContract] = useState<Contract>();

  const provider = new ethers.providers.JsonRpcProvider(
    "https://tame-cosmopolitan-violet.matic-testnet.discover.quiknode.pro/3e6de038de14a63965f8bd96cc3c52b4d32fc918/"
  );

  const addAddress = (address: string) => {
    setCompanyContract(new Contract(address, CompanyContract.abi, provider));
  };

  const uploadCsv = async (file: any) => {
    if (!companyContract || !file) return;
    const reader = new FileReader();
    const blob = new Blob([file.originFileObj], { type: "text/csv" });
    reader.readAsText(blob);
    reader.onload = async (e) => {
      const csv = e.target?.result;
      const results = PapaParse.parse(csv as string, {
        header: false,
      });
      const data = results.data;
      const csvData: EmployeeData[] = data.map((row: any) => {
        return {
          employeeAddress: row[0],
          pensionStartDate: row[1],
          pensionDuration: row[2],
          monthyAmount: row[3],
          employeeJoiningDate: row[4],
          employeeLeavingDate: row[5],
          minimumServiceRequired: row[6],
        };
      });
      console.log(csvData);
      await companyContract.addEmployees(
        csvData.map((row) => row.employeeAddress),
        csvData.map((row) => row.pensionStartDate),
        csvData.map((row) => row.pensionDuration),
        csvData.map((row) => row.monthyAmount),
        csvData.map((row) => row.employeeJoiningDate),
        csvData.map((row) => row.employeeLeavingDate),
        csvData.map((row) => row.minimumServiceRequired)
      );
      await fetch("/api/add-employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: companyContract.address,
          employees: csvData,
        }),
      });
    };
  };

  return { companyContract, uploadCsv, addAddress };
};
