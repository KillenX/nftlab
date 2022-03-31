import { Attribute } from "../attribute/Attribute";
import { Nft } from "../nft/Nft";

export type Metadatum = {
  animationUrl: string | null;
  attributes?: Array<Attribute>;
  backgroundColor: string | null;
  createdAt: Date;
  description: string | null;
  externalUrl: string | null;
  id: string;
  image: string | null;
  name: string | null;
  nfts?: Array<Nft>;
  updatedAt: Date;
  youTubeUrl: string | null;
};
