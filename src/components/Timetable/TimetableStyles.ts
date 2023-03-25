import { Theme, mergeStyleSets } from "@fluentui/react";
import { CellProps } from "../Cell/CellProps";

/**
 * Get class names for the Timetable.
 * @param theme Theme.
 * @returns Class names.
 */
export const getTimetableStyles = (theme?: Theme, cellProps?: CellProps) => {
    return mergeStyleSets({
        cell: {
            backgroundColor: cellProps?.color,
            border: "1px solid black",
            "h4, h5": {
                margin: "0"
            }
        },

        header: {
            // border: "1px solid black"
            // color: "black"
            // flex: 1
        },

        room: {
            fontSize: "0.8rem",
            fontWeight: "600"
            // padding: "0.2rem 0 0.2rem 0"
        },

        class: {
            fontWeight: "bold",
            padding: "0.2rem 0 0.2rem 0"
        },

        row: {
            // border: "1px solid black"
            // flex: 1
        },

        table: {
            border: "1px solid black"
            // maxWidth: "75%"
        },

        tableDiv: {
            overflowX: "auto"
        }
    });
};
