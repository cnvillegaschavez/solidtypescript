import { Employee, EmployeeOnContract, EmployeeOnPayroll } from './../o/employee';

export class EmployeeWrite {

    constructor(employee: Employee){
      console.log(employee.getSalary());
    }

}

let employeeOnContract: EmployeeOnContract= new EmployeeOnContract("46046...","Employee","963.....",4000);
let employeeWrite: EmployeeWrite= new EmployeeWrite(this.employeeOnContract);