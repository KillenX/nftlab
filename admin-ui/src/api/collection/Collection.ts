import { Contract } from "../contract/Contract";

export type Collection = {
  contract?: Contract | null;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
};
