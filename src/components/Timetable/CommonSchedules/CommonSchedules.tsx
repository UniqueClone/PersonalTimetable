import { Stack, Text } from "@fluentui/react";
import { ControlledCheckbox } from "./ControlledCheckbox/ControlledCheckbox";
import React from "react";

// TODO make these checkboxes actually affect rendering.
export const CommonSchedules = (): JSX.Element => {
    return (
        <Stack horizontalAlign="start" tokens={{ childrenGap: "1rem" }}>
            <Stack.Item>
                <Text variant="xxLarge" role="heading" aria-level={1} block>
                    Common Schedules
                </Text>
                <Text variant="large" block>
                    Select the schedules you want to see:
                </Text>
            </Stack.Item>
            <Stack.Item>
                <ControlledCheckbox name="Computer Support Centre" />
            </Stack.Item>
            <Stack.Item>
                <ControlledCheckbox name="Writing Support Centre" />
            </Stack.Item>
        </Stack>
    );
};
