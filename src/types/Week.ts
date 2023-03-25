import { Day, PartialDay } from "./Day";

export type Week = {
    mon: Day;
    tue: Day;
    wed: Day;
    thu: Day;
    fri: Day;
};

export type PartialWeek = {
    mon?: PartialDay;
    tue?: PartialDay;
    wed?: PartialDay;
    thu?: PartialDay;
    fri?: PartialDay;
};
