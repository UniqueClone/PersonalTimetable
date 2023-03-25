import { Dropdown, IDropdownOption, IDropdownStyles, PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { AppConfig } from "../../config/AppConfig";
import { addTimeSlot } from "../Admin/Admin.mappers";

export const AddTimeSlot: FC = () => {
    const times = AppConfig.times;
    const workweek = AppConfig.workweek;

    const timeOptions = times.map(time => ({ key: time, text: time }));
    const dayOptions = workweek.map(day => ({ key: day, text: day }));

    const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

    const [disabled, setDisabled] = useState(false);
    const [selectedDay, setSelectedDay] = useState<IDropdownOption>();
    const [selectedTime, setSelectedTime] = useState<IDropdownOption>();
    const [length, setLength] = useState("");
    const [moduleCode, setModuleCode] = useState("");
    const [room, setRoom] = useState("");

    const getErrorMessage = (value: string): string => {
        return value.length > 0 ? "" : "Field must not be empty";
    };

    const onDayChange = (event: React.FormEvent<HTMLDivElement>, day?: IDropdownOption): void => {
        if (day) {
            setSelectedDay(day);
        }
    };

    const onLengthChange = useCallback((event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if (!newValue || newValue.match(/^[0-9]?$/)) {
            // Only allow one digit numbers
            setLength(newValue || "");
        }
    }, []);

    const onModuleCodeChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, moduleCode?: string) => {
        if (!moduleCode) {
            setModuleCode("");
        } else if (moduleCode.match(/^[aA0-zZ9]{1,8}$/)) {
            // Only allow a string under length 8 and made of only letters and numbers
            setModuleCode(moduleCode);
        }
    };

    const onRoomChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, room?: string) => {
        if (!room) {
            setRoom("");
        } else if (room.match(/^[aA0-zZ9|\s]{1,20}$/)) {
            // Only allow a string under length 20 and made of only letters, numbers and spaces
            setRoom(room);
        }
    };

    const onTimeChange = (event: React.FormEvent<HTMLDivElement>, time?: IDropdownOption): void => {
        if (time) {
            setSelectedTime(time);
        }
    };

    useEffect(() => {
        setDisabled(!selectedDay || !selectedTime || !length || !moduleCode || !room);
    }, [selectedDay, selectedTime, length, moduleCode, room]);

    return (
        <>
            <Stack.Item grow>
                <Text variant="xLarge" role="heading" aria-level={2}>
                    Add Time Slot for Module
                </Text>
            </Stack.Item>
            <Stack tokens={{ childrenGap: 20 }}>
                <Stack.Item grow>
                    <TextField
                        label="Module Code"
                        onChange={onModuleCodeChange}
                        onGetErrorMessage={getErrorMessage}
                        placeholder="Enter module code"
                        required
                        styles={dropdownStyles}
                        validateOnLoad={false}
                        value={moduleCode}
                    />
                </Stack.Item>
                <Stack.Item grow>
                    <Dropdown
                        label="Day"
                        onChange={onDayChange}
                        options={dayOptions}
                        placeholder="Select an option"
                        selectedKey={selectedDay ? selectedDay.key : ""}
                        styles={dropdownStyles}
                    />
                </Stack.Item>
                <Stack.Item grow>
                    <Dropdown
                        label="Start Time"
                        onChange={onTimeChange}
                        options={timeOptions}
                        placeholder="Select an option"
                        required
                        selectedKey={selectedTime ? selectedTime.key : ""}
                        styles={dropdownStyles}
                    />
                </Stack.Item>
                <Stack.Item grow>
                    <TextField
                        label="Room"
                        onChange={onRoomChange}
                        onGetErrorMessage={getErrorMessage}
                        placeholder="Enter class location"
                        required
                        styles={dropdownStyles}
                        validateOnLoad={false}
                        value={room ? room : undefined}
                    />
                </Stack.Item>
                <Stack.Item grow>
                    <TextField
                        label="Length (hours)"
                        onChange={onLengthChange}
                        onGetErrorMessage={getErrorMessage}
                        placeholder="Enter class length"
                        required
                        styles={dropdownStyles}
                        validateOnLoad={false}
                        value={length}
                    />
                </Stack.Item>
            </Stack>
            <Stack.Item grow>
                <PrimaryButton
                    disabled={disabled}
                    onClick={() =>
                        addTimeSlot(
                            moduleCode,
                            selectedDay ? selectedDay.text : "",
                            selectedTime ? selectedTime.text : "",
                            Number(length),
                            room
                        )
                    }>
                    Add Time Slot
                </PrimaryButton>
            </Stack.Item>
        </>
    );
};
