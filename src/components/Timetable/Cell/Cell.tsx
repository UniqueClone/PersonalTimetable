import { CellProps } from "./CellProps";
import React from "react";
import { Td } from "react-super-responsive-table";
import { getTimetableStyles } from "../TimetableStyles";

export const Cell: React.FC<CellProps> = props => {
    const styles = getTimetableStyles();
    return <Td className={styles.cell}>{props.content}</Td>;
};
