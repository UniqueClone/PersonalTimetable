import { Day, PartialDay } from "../../types/Day";
import { PartialWeek, Week } from "../../types/Week";
import { ClassesByTime } from "../../types/Classes";
import { getMockClassesWithGaps } from "../../Mocks/MockClasses";
import { getMockWeek } from "../../Mocks/MockWeek";

/**
 * Combines two schedules together.
 * If there is a clash, the first schedule has priority.
 * @param schedule1 The first schedule.
 * @param schedule2 The second schedule to add to the first.
 * @returns A combined schedule of type Week.
 */
export const combineSchedules = (schedule1: Week, schedule2: Week): Week => {
    for (let i = 0; i < 10; i++) {
        if (schedule1.mon[i].class === "" && schedule2.mon[i].class !== "") {
            schedule1.mon[i] = schedule2.mon[i];
        }

        if (schedule1.tue[i].class === "" && schedule2.tue[i].class !== "") {
            schedule1.tue[i] = schedule2.tue[i];
        }

        if (schedule1.wed[i].class === "" && schedule2.wed[i].class !== "") {
            schedule1.wed[i] = schedule2.wed[i];
        }

        if (schedule1.thu[i].class === "" && schedule2.thu[i].class !== "") {
            schedule1.thu[i] = schedule2.thu[i];
        }

        if (schedule1.fri[i].class === "" && schedule2.fri[i].class !== "") {
            schedule1.fri[i] = schedule2.fri[i];
        }
    }

    return schedule1;
};

/**
 * Fill an empty day.
 */
export const fillEmptyDay = (): Day => {
    const emptyDay: PartialDay = [];
    for (let i = 0; i < 10; i++) {
        emptyDay.push({ class: "", room: "" });
    }
    return emptyDay as Day;
};

/**
 * Fill a partial day with empty classes.
 * @param day
 * @returns a filled Day.
 */
export const fillPartialDay = (day: PartialDay): Day => {
    const unfilledDay: PartialDay = [];
    for (let i = 0; i < 10; i++) {
        unfilledDay.push(day[i] ? day[i] : { class: "", room: "" });
    }
    return unfilledDay as Day;
};

/**
 * Fill a partial week with empty classes.
 * @param week
 * @returns a filled Week.
 */
export const fillPartialWeek = (week: PartialWeek): Week => {
    const mon: Day = week.mon ? fillPartialDay(week.mon) : fillEmptyDay();
    const tue: Day = week.tue ? fillPartialDay(week.tue) : fillEmptyDay();
    const wed: Day = week.wed ? fillPartialDay(week.wed) : fillEmptyDay();
    const thu: Day = week.thu ? fillPartialDay(week.thu) : fillEmptyDay();
    const fri: Day = week.fri ? fillPartialDay(week.fri) : fillEmptyDay();

    return { mon, tue, wed, thu, fri };
};

// TODO This should eventually be called from an API
export const getCscTimes = (): Week => {
    return fillPartialWeek({
        thu: [
            {
                class: "CSC",
                room: "B1.01",
                color: "pink"
            }
        ],
        fri: [
            {
                class: "CSC",
                room: "B1.01",
                color: "pink"
            }
        ]
    });
};

// TODO This should eventually be called from an API 
export const getWscTimes = (): Week => {
    return fillPartialWeek({
        mon: [
            {
                class: "",
                room: ""
            },
            {
                class: "WSC",
                room: "Online",
                color: "pink"
            },
            {
                class: "WSC",
                room: "Online",
                color: "pink"
            }
        ],
        tue: [
            {
                class: "",
                room: ""
            },
            {
                class: "",
                room: ""
            },
            {
                class: "WSC",
                room: "B1.01",
                color: "pink"
            }
        ],
        thu: [
            {
                class: "WSC",
                room: "Online",
                color: "pink"
            }
        ]
    });
};

export const getUserClasses = (): ClassesByTime => {
    return getMockClassesWithGaps();
};

export const useWeek = (id: number): Week => {
    return getMockWeek();
};
