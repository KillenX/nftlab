import { Nft } from "../nft/Nft";

export type Collection = {
  bannerImageUrl: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string;
  nfts?: Array<Nft>;
  updatedAt: Date;
};
