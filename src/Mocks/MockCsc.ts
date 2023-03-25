import { ClassesByTime } from "../types/Classes";

export const getMockCsc = (): ClassesByTime => {
    return {
        "9.00": [
            {
                class: "CSC",
                room: "LT1",
                color: "#FF0000"
            }
        ]
    };
};
