import "./styles.css";

import { PrimaryButton, Separator, Stack, Text } from "@fluentui/react";
import { Table, Th, Thead, Tr } from "react-super-responsive-table";
import { Cell } from "./Cell/Cell";
import { ClassesByTime } from "../../types/Classes";
import { NavBar } from "../NavBar/NavBar";
import React from "react";
import ReactToPrint from "react-to-print";
import { getTimetableStyles } from "./TimetableStyles";
import { getUserClasses } from "./Timetable.mappers";
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

const Timetable: React.FC = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const workweek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    const classes: ClassesByTime = getUserClasses();

    const times = ["9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00"];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const componentRef = React.useRef(null);

    const styles = getTimetableStyles();
    const containerStackTokens = { childrenGap: 20 };

    const today = new Date();

    const getWeekdayHeadings = () => {
        return workweek.map(workweek => <Th className={styles.header}>{workweek}</Th>);
    };

    const cellRow = (classes: ClassesByTime, cur_time: string) => {
        const cells: [JSX.Element] = [<></>];
        Object.entries(classes[cur_time]).forEach(([key, value], index) => {
            cells[index] = <Cell module={value.module} location={value.location} color={value.color} content={cur_time} />;
        });
        return cells ? cells : <></>;
    };

    const getRows = () => {
        return times.map(time => (
            <Tr className={styles.row}>
                <Th>{time}</Th>
                {cellRow(classes, time)}
            </Tr>
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
                            <Text variant="xxLarge">Timetable</Text>
                        </Stack.Item>
                        <Stack.Item>
                            <Text variant="large">
                                {"Today is: "}
                                {weekdays[today.getDay()]} {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}
                            </Text>
                        </Stack.Item>
                        <Stack.Item>
                            <ReactToPrint
                                trigger={() => <PrimaryButton>Print this out!</PrimaryButton>}
                                content={() => componentRef.current}
                            />
                        </Stack.Item>
                        <div ref={componentRef}>
                            <Stack.Item>
                                <Table className={styles.table}>
                                    <Thead className={styles.row}>
                                        <Tr>
                                            <Th className={styles.header}>Time</Th>
                                            {getWeekdayHeadings()}
                                        </Tr>
                                    </Thead>
                                    {getRows()}
                                </Table>
                            </Stack.Item>
                        </div>
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

export default Timetable;
