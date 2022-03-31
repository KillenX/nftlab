import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "id";

export const TestTitle = (record: TTest): string => {
  return record.id || record.id;
};
