export interface Employee {
  firstName: string;
  lastName: string;
}

export interface Department {
  name: string;
  employees: Employee[];
}

export interface Officer {
  firstName: string;
  lastName: string;
  role: string;
}
