import "./styles.css";

import React, { useState } from "react";
import { Table, Th, Thead, Tr } from "react-super-responsive-table";
import { Cell } from "./Cell/Cell";
import { NavBar } from "../NavBar/NavBar";
import { Stack } from "@fluentui/react";
import { getTimetableStyles } from "./TimetableStyles";

const Timetable: React.FC = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const workweek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

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

    const styles = getTimetableStyles();

    const today = new Date();

    const getWeekdayHeadings = () => {
        return workweek.map(workweek => <Th className={styles.header}>{workweek}</Th>);
    };

    const cellRow = () => {
        return workweek.map(workweek => <Cell content={"Class on " + workweek} />); // TODO - replace with actual data
    };

    const getRows = () => {
        return times.map(time => (
            <Tr className={styles.row}>
                <Th>{time}</Th>
                {cellRow()}
            </Tr>
        ));
    };

    return (
        <>
            <NavBar />
            <Stack horizontalAlign="center">
                <Stack.Item>
                    <h1>Timetable</h1>
                </Stack.Item>
                <Stack.Item>
                    <h2>
                        {weekdays[today.getDay()]} {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}
                    </h2>
                </Stack.Item>
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
            </Stack>
        </>
    );
};

export default Timetable;
