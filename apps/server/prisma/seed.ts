import { PrismaClient } from "@prisma/client";
import { organizationData } from "../src/data/organizationData";
import { leadershipData } from "../src/data/leadershipData";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function main() {
  console.log("Seeding database...");

  // 1. Seed Departments and Employees
  for (const dept of organizationData) {
    await prisma.department.create({
      data: {
        name: dept.name,
        // Prisma is smart enough to create the related employees at the same time
        employees: {
          create: dept.employees.map((emp) => ({
            firstName: emp.firstName,
            lastName: emp.lastName,
          })),
        },
      },
    });
  }

  // 2. Seed Roles and Officers
  for (const leader of leadershipData) {
    await prisma.role.create({
      data: {
        title: leader.role,
        officer: {
          create: {
            firstName: leader.firstName,
            lastName: leader.lastName,
          },
        },
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
