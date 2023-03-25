import "./styles.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { FC, useRef, useState } from "react";
import { PrimaryButton, Separator, Stack, Text } from "@fluentui/react";
import { combineSchedules, fillEmptyDay, fillPartialWeek, getCscTimes, getWscTimes, useWeek } from "./Timetable.mappers";
import { AppConfig } from "../../config/AppConfig";
import { Cell } from "../Cell/Cell";
import { CommonSchedules } from "./CommonSchedules/CommonSchedules";
import { NavBar } from "../NavBar/NavBar";
import ReactToPrint from "react-to-print";
import { Today } from "./Today";
import { Week } from "../../types/Week";
import { getTimetableStyles } from "./TimetableStyles";
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

export const Timetable: FC = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const workweek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    // Used for printing component.
    const componentRef = useRef(null);

    const styles = getTimetableStyles();
    const containerStackTokens = { childrenGap: 20 };

    const getWeekdayHeadings = () => {
        return workweek.map(workweek => <th className={styles.header}>{workweek}</th>);
    };

    // TODO remove test and Test
    type Test = { [index: string]: Week };
    const test: Test = {
        CSC: getCscTimes(),
        WSC: getWscTimes()
    };

    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    let combined: Week = fillPartialWeek({ mon: fillEmptyDay() });

    // Renders each selected class in the priority order they are selected.
    for (const key in selectedKeys) {
        combined = key ? combineSchedules(combined, test[selectedKeys[key]]) : combined;
    }

    const userClasses = useWeek(0); // TODO implement user ID
    const renderClasses = useRef(userClasses);

    renderClasses.current = combineSchedules(userClasses, combined);

    /**
     * This function takes in a week and a time and returns a list of renderable cells for that time.
     * The cells are returned as a list to be rendered as a table row.
     * @param week is the schedule.
     * @param curTime is the current time slot.
     * @returns an Array of renderable Cells.
     */
    const cellRow = (week: Week, curTime: number) => {
        const color1 = "#75a97e";
        const color2 = "#a975a0";

        let color: string;
        if (curTime % 2 === 0) {
            color = color1;
        } else {
            color = color2;
        }

        const cells: [JSX.Element] = [<></>];
        Object.entries(week).forEach(([key, day], index) => {
            const slot = day[curTime];
            if (slot.class !== "") {
                cells[index] = <Cell class={slot.class} room={slot.room} color={slot.color ? slot.color : color} />;
            } else {
                cells[index] = <Cell color="white" />;
            }
        });
        return cells;
    };

    const getRows = () => {
        return times.map(time => (
            <tr className={styles.row}>
                <th>{time}</th>
                {cellRow(renderClasses.current, times.indexOf(time))}
            </tr>
        ));
    };

    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    return (
        <>
            {isAuthenticated ? (
                <>
                    <NavBar />
                    <Stack horizontalAlign="center" tokens={containerStackTokens}>
                        <Stack.Item>
                            <Text variant="xxLarge" role="heading" aria-level={1}>
                                Timetable
                            </Text>
                        </Stack.Item>
                        <Today />
                        <Stack.Item>
                            <ReactToPrint
                                trigger={() => <PrimaryButton>Print this out!</PrimaryButton>}
                                content={() => componentRef.current}
                            />
                        </Stack.Item>
                        <Stack.Item>
                            <Stack wrap horizontal tokens={{ childrenGap: "1rem" }}>
                                <Stack.Item grow>
                                    <div ref={componentRef} className={styles.tableDiv}>
                                        <table className={styles.table}>
                                            <thead className={styles.row}>
                                                <tr>
                                                    <th className={styles.header}>Time</th>
                                                    {getWeekdayHeadings()}
                                                </tr>
                                            </thead>
                                            {getRows()}
                                        </table>
                                    </div>
                                </Stack.Item>
                                <Stack.Item>
                                    <CommonSchedules selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
                                </Stack.Item>
                            </Stack>
                        </Stack.Item>
                        <Stack.Item>
                            <Separator />
                        </Stack.Item>
                    </Stack>
                </>
            ) : (
                <>{navigate("/")}</>
            )}
        </>
    );
};
