import { Dropdown, IDropdownOption, IDropdownStyles, Stack, Text } from "@fluentui/react";
import React from "react";

interface CommonSchedulesProps {
    selectedKeys: string[];
    setSelectedKeys: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CommonSchedules: React.FC<CommonSchedulesProps> = props => {
    const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

    // TODO Dropdown options should be pulled from database.
    const dropdownControlledExampleOptions = [
        { key: "CSC", text: "CSC" },
        { key: "WSC", text: "WSC" },
        { key: "Class 3", text: "Class 3", disabled: true }
    ];

    const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption | undefined): void => {
        if (item) {
            props.setSelectedKeys(
                item.selected ? [...props.selectedKeys, item.key as string] : props.selectedKeys.filter(key => key !== item.key)
            );
        }
    };

    return (
        <Stack horizontalAlign="start" tokens={{ childrenGap: "1rem" }}>
            <Stack.Item>
                <Text variant="xLarge" role="heading" aria-level={2} block>
                    Common Schedules
                </Text>
                <Text variant="large" block>
                    Select the schedules you want to see:
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Dropdown
                    selectedKeys={props.selectedKeys}
                    onChange={onChange}
                    options={dropdownControlledExampleOptions}
                    multiSelect
                    styles={dropdownStyles}
                />
            </Stack.Item>
        </Stack>
    );
};
