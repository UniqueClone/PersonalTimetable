import { CellProps } from "./CellProps";
import { Text } from "@fluentui/react";
import { getTimetableStyles } from "../Timetable/TimetableStyles";

export const Cell: React.FC<CellProps> = props => {
    const styles = getTimetableStyles(undefined, props);
    return (
        <td className={styles.cell}>
            <Text variant="medium" className={styles.class}>
                {props.class}
            </Text>
            {props.content ? (
                <>
                    <br />
                    <Text variant="small">{props.content}</Text>
                </>
            ) : (
                <></>
            )}
            <br />
            <Text variant="small" className={styles.room}>
                {props.room}
            </Text>
        </td>
    );
};
