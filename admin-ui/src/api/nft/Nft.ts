import { Collection } from "../collection/Collection";
import { Contract } from "../contract/Contract";
import { Metadatum } from "../metadatum/Metadatum";

export type Nft = {
  collection?: Collection | null;
  contract?: Contract;
  createdAt: Date;
  id: string;
  metadatum?: Metadatum | null;
  tokenId: string | null;
  updatedAt: Date;
};
