import { TestWhereInput } from "./TestWhereInput";
import { TestOrderByInput } from "./TestOrderByInput";

export type TestFindManyArgs = {
  where?: TestWhereInput;
  orderBy?: Array<TestOrderByInput>;
  skip?: number;
  take?: number;
};
