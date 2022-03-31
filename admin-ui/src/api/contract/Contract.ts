import { Nft } from "../nft/Nft";

export type Contract = {
  address: string;
  createdAt: Date;
  id: string;
  name: string | null;
  nfts?: Array<Nft>;
  updatedAt: Date;
};
