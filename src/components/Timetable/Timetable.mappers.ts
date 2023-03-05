import { ClassesByTime } from "../../types/Classes";
import { getMockClasses } from "../../Mocks/MockClasses";

export const getClassTimesFromModuleCode = (moduleCode: string) => {
    const classTimes = { lectures: [""], tutorials: [], labs: [] };
    return classTimes;
};

export const getUserClasses = (): ClassesByTime => {
    return getMockClasses();
};
