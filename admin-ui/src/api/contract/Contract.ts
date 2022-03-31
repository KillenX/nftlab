import { Collection } from "../collection/Collection";
import { Nft } from "../nft/Nft";

export type Contract = {
  address: string;
  collections?: Array<Collection>;
  createdAt: Date;
  id: string;
  name: string | null;
  nfts?: Array<Nft>;
  updatedAt: Date;
};
