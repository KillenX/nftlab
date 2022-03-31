import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TestWhereInput = {
  id?: StringFilter;
  sljedeca?: DateTimeNullableFilter;
  whateverField?: IntNullableFilter;
};
