import { Request, Response } from "express";
import { Employee } from "../../models/Employee";

export const createEmployeeController = async (
  request: Request,
  response: Response
) => {
  try {
    const data = request.body;

    const result = await Employee.create(data);

    return response.status(201).json(result);
  } catch (error) {
    return response.status(500).json("Problem connection");
  }
};

export const getAllEmployeeController = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await Employee.getAll();

    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json("Problem connection");
  }
};

export const getEmployeeByIdController = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;

    const result = await Employee.getById(id);

    return response.status(201).json(result);
  } catch (error) {
    return response.status(500).json("Problem connection");
  }
};
