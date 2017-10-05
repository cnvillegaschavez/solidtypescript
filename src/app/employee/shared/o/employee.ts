export class Employee {
    
    private dni: string;
    private name: string;
    private phoneNumber: string;
    protected salary: number;

    constructor(dni: string, name: string, phoneNumber:string, salary: number){
        this.dni=dni;
        this.name=name;
        this.phoneNumber=phoneNumber;
        this.salary=salary;
    }

    getSalary(): number {
       return this.salary;
    }
}

export class EmployeeOnPayroll extends Employee {
    
    constructor(dni:string, name: string, phoneNumber,  salary:number){
        super(dni, name, phoneNumber, salary);
    }

   getSalary():number {
        return  super.getSalary()*40;
    }

}

export class EmployeeOnContract extends Employee {
    
    constructor(dni:string, name: string, phoneNumber, salary:number){
        super(dni, name, phoneNumber, salary);
    }

   getSalary():number {
        return  super.getSalary()*30;
    }

}

