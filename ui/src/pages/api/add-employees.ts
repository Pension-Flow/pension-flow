import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/lib/mongodb";
import Company from "@/models/Company";
import Employee from "@/models/Employee";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    await connectMongo();
    if (!req.body.employees) res.status(400).json("Please enter employees!");
    if (!req.body.companyAddress)
      res.status(400).json("Please enter company address!");
    const { employees, companyAddress } = req.body;
    const company = await Company.findOne({
      address: companyAddress,
    });
    if (!company) res.status(400).json("Company not found!");
    for (let i = 0; i < employees.length; i++) {
      const employee = await Employee.create({
        address: employees[i].address,
        company: company._id,
        pensionStartDate: employees[i].pensionStartDate,
        pensionDuration: employees[i].pensionDuration,
        monthlyAmount: employees[i].monthlyAmount,
        employeeJoiningDate: employees[i].employeeJoiningDate,
        employeeLeavingDate: employees[i].employeeLeavingDate,
        minimumServiceRequired: employees[i].minimumServiceRequired,
      });
      await employee.save();
      company.employees.push(employee._id);
    }
    await company.save();
    res.status(200).json("Successfully added employees!");
  } else {
    res.status(405).end();
  }
}
