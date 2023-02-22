import { CellProps } from "./CellProps";
import React from "react";
import { Td } from "react-super-responsive-table";
import { Text } from "@fluentui/react";
import { getTimetableStyles } from "../TimetableStyles";

export const Cell: React.FC<CellProps> = props => {
    const styles = getTimetableStyles(undefined, props);
    return (
        <Td className={styles.cell}>
            <Text variant="medium" className={styles.module}>
                {props.module}
            </Text>
            <br />
            <Text variant="small" className={styles.location}>
                {props.location}
            </Text>
        </Td>
    );
};
