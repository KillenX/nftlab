import { Metadatum as TMetadatum } from "../api/metadatum/Metadatum";

export const METADATUM_TITLE_FIELD = "name";

export const MetadatumTitle = (record: TMetadatum): string => {
  return record.name || record.id;
};
