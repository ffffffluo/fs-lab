import { leadershipData } from "../data/leadershipData";
import type { Officer } from "../types/types";

let tempLeadershipData: Officer[] = [...leadershipData];

export const leadershipRepo = {
  getOfficers: (): Officer[] => {
    return tempLeadershipData;
  },

  createOfficer: (firstName: string, lastName: string, role: string) => {
    tempLeadershipData = [...tempLeadershipData, { firstName, lastName, role }];
    return tempLeadershipData;
  },
};
