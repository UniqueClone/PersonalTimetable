// /** Class times are of the following structure:
//  * {
//  * lectures: ["", "", ""],
//  * tutorials: ["", "", ""],
//  * labs: ["", "", ""]
//  * }
//  **/

export interface Module {
    code: string;
    name: string;
    lectures: string[];
    tutorials: string[];
    labs: string[];
}

// export const getClassTimesFromModuleCode = (moduleCode: string) => {
//     const classTimes: Module = {
//             code: moduleCode,
//             name: "",
//             lectures: [],
//             tutorials: [],
//             labs: []
//         }
//     };
//     return classTimes.moduleCode;
// };
