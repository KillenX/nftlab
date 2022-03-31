import { Attribute as TAttribute } from "../api/attribute/Attribute";

export const ATTRIBUTE_TITLE_FIELD = "displayType";

export const AttributeTitle = (record: TAttribute): string => {
  return record.displayType || record.id;
};
