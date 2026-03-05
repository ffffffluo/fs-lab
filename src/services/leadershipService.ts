import { leadershipRepo } from "../repositories/leadershipRepo";

export const leadershipService = {
  getOfficers: () => {
    return leadershipRepo.getOfficers();
  },

  createOfficer: (firstName: string, lastName: string, role: string) => {
    const officers = leadershipRepo.getOfficers();

    // Business Logic Validations
    const roleExists = officers.some(
      (o) => o.role.toLowerCase() === role.toLowerCase(),
    );

    if (roleExists) {
      return {
        success: false,
        error: "This role is already occupied.",
        target: "role",
      };
    }

    if (firstName.length < 3) {
      return {
        success: false,
        error: "First Name must have at least three characters.",
        target: "first",
      };
    }

    // Success
    leadershipRepo.createOfficer(firstName, lastName, role);
    return { success: true, error: null, target: null };
  },
};
