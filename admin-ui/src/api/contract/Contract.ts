import { ContractType } from "../contractType/ContractType";
import { Nft } from "../nft/Nft";

export type Contract = {
  address: string;
  contractType?: ContractType;
  createdAt: Date;
  description: string | null;
  externalLink: string | null;
  feeRecipient: string | null;
  id: string;
  image: string | null;
  name: string | null;
  nfts?: Array<Nft>;
  sellerFeeBasisPoints: number | null;
  updatedAt: Date;
  uri: string | null;
};
