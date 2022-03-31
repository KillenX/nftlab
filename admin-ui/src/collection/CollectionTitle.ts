import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "name";

export const CollectionTitle = (record: TCollection): string => {
  return record.name || record.id;
};
