import { FontWeights, IStackStyles, IStackTokens, ITextStyles, Panel, PrimaryButton, Separator, Stack, Text } from "@fluentui/react";
import React, { useState } from "react";
import LoginButton from "../LoginButton/LoginButton";
import { NavBar } from "../NavBar/NavBar";
import { getWelcomeScreenStyles } from "./WelcomeScreenStyles";
import { useIsAuthenticated } from "@azure/msal-react";

export const WelcomeScreen: React.FC = () => {
    const [panelVisible, setPanelVisible] = useState(false);
    const styles = getWelcomeScreenStyles();
    const isAuthenticated = useIsAuthenticated();

    const showPanel = () => {
        setPanelVisible(!panelVisible);
    };

    const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
    const stackTokens: IStackTokens = { childrenGap: 15 };
    const stackStyles: Partial<IStackStyles> = {
        root: {
            width: "960px",
            margin: "0 auto",
            paddingTop: "5rem",
            textAlign: "center",
            color: "#605e5c"
        }
    };

    return (
        <>
            <NavBar />
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
                            <LoginButton />
                        </Stack.Item>
                        <Stack.Item grow>{isAuthenticated ? <PrimaryButton href="/timetable">Timetable</PrimaryButton> : <></>}</Stack.Item>
                    </Stack>
                </Stack.Item>

                {/* <LoginDialog {...dialogProps} /> */}

                <Panel isOpen={panelVisible} type={3} onDismiss={showPanel}>
                    {"sdlkfnfnlk"}
                </Panel>

                {/* <div>
                <Timetable />
            </div> */}
            </Stack>
        </>
    );
};
