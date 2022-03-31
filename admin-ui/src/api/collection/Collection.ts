import { Nft } from "../nft/Nft";

export type Collection = {
  createdAt: Date;
  id: string;
  name: string;
  nfts?: Array<Nft>;
  updatedAt: Date;
};
