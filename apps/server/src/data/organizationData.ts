export interface Employee {
  firstName: string;
  lastName: string;
}

export interface Department {
  name: string;
  employees: Employee[];
}

export const organizationData: Department[] = [
  {
    name: "Executive Management",
    employees: [
      { firstName: "Casey", lastName: "Rivera" },
      { firstName: "Jordan", lastName: "Smith" },
    ],
  },
  {
    name: "Finance",
    employees: [
      { firstName: "Taylor", lastName: "Morgan" },
      { firstName: "Riley", lastName: "Quinn" },
      { firstName: "Alex", lastName: "Pruitt" },
    ],
  },
  {
    name: "IT Operations",
    employees: [
      { firstName: "Jamie", lastName: "Lennon" },
      { firstName: "Sam", lastName: "Vance" },
    ],
  },
];
