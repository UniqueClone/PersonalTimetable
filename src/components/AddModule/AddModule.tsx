import { FC, FormEvent, useEffect, useState } from "react";
import { MessageBar, MessageBarType, PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import { addModule } from "../Admin/Admin.mappers";

export const AddModule: FC = () => {
    const [disabled, setDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const [moduleCode, setModuleCode] = useState<string>("");
    const [moduleName, setModuleName] = useState<string>("");

    const getErrorMessage = (value: string): string => {
        return value.length > 0 ? "" : "Field must not be empty";
    };

    const onModuleCodeChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, moduleCode?: string) => {
        if (!moduleCode) {
            setModuleCode("");
        } else if (moduleCode.match(/^[aA0-zZ9]{1,8}$/)) {
            // Only allow a string under length 8 and made of only letters and numbers
            setModuleCode(moduleCode);
        }
    };

    const onModuleNameChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, moduleName?: string) => {
        if (!moduleName) {
            setModuleName("");
        } else if (moduleName.match(/^[aA0-zZ9|\s]{1,30}$/)) {
            // Only allow a string under length 30 and made of only letters, numbers and spaces
            setModuleName(moduleName);
        }
    };

    useEffect(() => {
        if (moduleCode.length > 0 && moduleName.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [moduleCode, moduleName]);

    return (
        <>
            <Stack.Item grow>
                <Text variant="xLarge" role="heading" aria-level={2}>
                    Add Module
                </Text>
            </Stack.Item>
            <Stack.Item>
                {errorMessage ? (
                    <MessageBar messageBarType={MessageBarType.error}>
                        {errorMessage}
                        {/* The module code must be unique. A module with the same code already exists. */}
                    </MessageBar>
                ) : (
                    <></>
                )}
            </Stack.Item>
            <Stack horizontal tokens={{ childrenGap: 20 }} wrap>
                <Stack.Item grow>
                    <TextField
                        label="Module Name"
                        onGetErrorMessage={getErrorMessage}
                        onChange={onModuleNameChange}
                        placeholder="Enter module name"
                        required
                        validateOnLoad={false}
                        value={moduleName}
                    />
                </Stack.Item>
                <Stack.Item grow>
                    <TextField
                        label="Module Code"
                        onGetErrorMessage={getErrorMessage}
                        onChange={onModuleCodeChange}
                        placeholder="Enter module code"
                        required
                        validateOnLoad={false}
                        value={moduleCode}
                    />
                </Stack.Item>
            </Stack>
            <Stack.Item grow>
                <PrimaryButton disabled={disabled} onClick={() => addModule(moduleCode, moduleName)}>
                    Add Module
                </PrimaryButton>
            </Stack.Item>
        </>
    );
};
