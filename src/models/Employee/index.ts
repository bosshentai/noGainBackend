// import { Employee } from './../../../node_modules/.prisma/client/index.d';

import { hash } from "bcryptjs";
import {
  CreateEmployeeRequestDTO,
  CreateEmployeeResponseDTO,
} from "../../dto/Employee/Create";
import { prisma } from "../../database/prismaClient";
import { Roles } from "@prisma/client";

export class Employee {
  static async create(data: CreateEmployeeRequestDTO) {
    try {
      const hashedPassword = await hash("123456", 12);
      const newEmployee = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: hashedPassword,
          role: Roles.EMPLOYEE,
          cni: data.cni,
          nif: data.nif,
          birth: data.birth,
          employee: {
            create: {},
          },
        },
      });

      return newEmployee;
    } catch (error) {}
  }

  static async getAll() {
    const data = await prisma.employee.findMany({
      select: {
        id: true,
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    const employee = data.map((item) => {
      return {
        id: item.id,
        name: item.user.name,
        email: item.user.email,
      };
    });

    return employee;
  }

  static async getById(id: string) {
    const data = await prisma.employee.findUnique({
      where: {
        id,
      },
      select: {
        user: {
          select: {
            name: true,
            email: true,
            birth: true,
            phone: true,
            cni: true,
            nif: true,
          },
        },
      },
    });

    if (!data) {
      throw new Error("Employee ID not found");
    }

    const employee = {
      name: data.user.name,
      email: data.user.email,
      birth: data.user.birth.toISOString().slice(0, 10),
      phone: data.user.phone,
      cni: data.user.cni,
      nif: data.user.nif,
    };

    return employee;
  }
}
