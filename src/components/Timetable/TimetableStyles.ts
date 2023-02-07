import { Theme, mergeStyleSets } from "@fluentui/react";

/**
 * Get class names for the Timetable.
 * @param theme Theme.
 * @returns Class names.
 */
export const getTimetableStyles = (theme?: Theme) => {
    return mergeStyleSets({
        cell: {
            border: "1px solid black"
            // color: "black",
            // alignItems: "center"
        },

        header: {
            // border: "1px solid black",
            // color: "black"
            // flex: 1
        },

        row: {
            // border: "1px solid black"
            // flex: 1
        },

        table: {
            border: "1px solid black"
            // borderCollapse: "collapse",
            // // display: "flex",
            // // minHeight: "fit-content",
            // margin: "auto",
            // minWidth: "60rem",
            // textAlign: "center"
        }
    });
};
