import { Metadatum } from "../metadatum/Metadatum";

export type Attribute = {
  createdAt: Date;
  displayType: string | null;
  id: string;
  metadatum?: Metadatum | null;
  traitType: string;
  updatedAt: Date;
  value: string;
};
