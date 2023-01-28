import { PrimaryButton, Stack, Separator, Text, FontWeights, IStackStyles, IStackTokens, ITextStyles, Panel } from "@fluentui/react";
import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import LoginDialog from "../LoginDialog/LoginDialog";
import { LoginDialogProps } from "../LoginDialog/LoginDialogProps";
import { getWelcomeScreenStyles } from "./WelcomeScreenStyles";

export const WelcomeScreen: React.FC = () => {
    const [panelVisible, setPanelVisible] = useState(false);
    const [visible, setVisible] = useState(true);

    const showPanel = () => {
        setPanelVisible(!panelVisible);
    };
    const showDialog = () => {
        setVisible(!visible);
    };

    const dialogProps: LoginDialogProps = {
        hidden: visible,
        onDismiss: showDialog
    };

    const styles = getWelcomeScreenStyles();

    const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
    const stackTokens: IStackTokens = { childrenGap: 15 };
    const stackStyles: Partial<IStackStyles> = {
        root: {
            width: "960px",
            margin: "0 auto",
            textAlign: "center",
            color: "#605e5c"
        }
    };

    return (
        <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
            <Stack.Item>
                <Text variant="xxLarge" styles={boldStyle}>
                    Welcome to your Personalised Timetable.
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Text variant="medium">
                    {"The timetable that's "}
                    <strong>
                        <em>REALLY</em>
                    </strong>
                    {" yours."}
                </Text>
            </Stack.Item>
            <Stack.Item>
                <Separator className={styles.separator} />
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal horizontalAlign="center" tokens={stackTokens}>
                    <Stack.Item grow>
                        <PrimaryButton onClick={showDialog} text={"Login / Sign Up"} />
                    </Stack.Item>
                    <Stack.Item grow>
                        <PrimaryButton onClick={showPanel} text={"Calendar"} />
                    </Stack.Item>
                </Stack>
            </Stack.Item>

            <LoginDialog {...dialogProps} />

            <Panel isOpen={panelVisible} type={3} onDismiss={showPanel}>
                {"sdlkfnfnlk"}
            </Panel>

            <div>
                <Calendar />
            </div>
        </Stack>
    );
};
