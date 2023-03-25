import { Stack, Text } from "@fluentui/react";

export const Today = () => {
    const today = new Date();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

    return (
        <Stack.Item>
            <Text variant="large">
                {"Today is: "}
                {weekdays[today.getDay()]} {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}
            </Text>
        </Stack.Item>
    );
};
