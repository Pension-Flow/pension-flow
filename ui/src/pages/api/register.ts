import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/lib/mongodb";
import Company from "@/models/Company";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    await connectMongo();
    if (!req.body.name)
      res.status(400).json("Please enter a name for your company!");
    if (!req.body.address)
      res.status(400).json("Please enter an address for your company!");
    const { name, address } = req.body;
    const company = await Company.create({
      name,
      address,
    });
    await company.save();
    res.status(200).json("Successfully created a new company!");
  } else {
    res.status(405).end();
  }
}
