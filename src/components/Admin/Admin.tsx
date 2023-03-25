import { FC, useState } from "react";
import { IButtonStyles, PrimaryButton, Stack, Text } from "@fluentui/react";
import { AddModule } from "../AddModule/AddModule";
import { AddTimeSlot } from "../AddTimeSlot/AddTimeSlot";
import { NavBar } from "../NavBar/NavBar";

export const Admin: FC = () => {
    const buttonStyles: Partial<IButtonStyles> = {
        root: {
            minHeight: "2.5rem",
            minWidth: "8.5rem"
        }
    };

    const [currentMode, setCurrentMode] = useState<"addModule" | "addTimeSlot">("addModule");

    return (
        <>
            <NavBar />
            <Stack horizontalAlign="center" tokens={{ childrenGap: 20 }}>
                <Stack.Item>
                    <Text variant="xxLarge" role="heading" aria-level={1}>
                        Admin Page
                    </Text>
                </Stack.Item>
                <Stack.Item>
                    <Stack horizontal tokens={{ childrenGap: 20 }}>
                        <Stack.Item>
                            {currentMode === "addTimeSlot" ? (
                                <PrimaryButton onClick={() => setCurrentMode("addModule")} styles={buttonStyles}>
                                    Add Module
                                </PrimaryButton>
                            ) : (
                                <PrimaryButton onClick={() => setCurrentMode("addTimeSlot")} styles={buttonStyles}>
                                    Add Time Slot
                                </PrimaryButton>
                            )}
                        </Stack.Item>
                    </Stack>
                </Stack.Item>
                {currentMode === "addModule" ? <AddModule /> : <AddTimeSlot />}
            </Stack>
        </>
    );
};
