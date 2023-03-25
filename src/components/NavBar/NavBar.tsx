import { IButtonStyles, IStackStyles, IStackTokens, PrimaryButton, Stack } from "@fluentui/react";
import LoginButton from "../LoginButton/LoginButton";
import { useIsAuthenticated } from "@azure/msal-react";

export const NavBar: React.FC = () => {
    const isAuthenticated = useIsAuthenticated();

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };

    const buttonStyles: Partial<IButtonStyles> = {
        root: {
            minWidth: "7.5rem"
        }
    };

    const stackStyles: Partial<IStackStyles> = {
        root: {
            width: "80%",
            margin: "0 auto",
            padding: "1rem",
            // position: "absolute",
            textAlign: "center",
            color: "#605e5c"
            // border: "1px solid #605e5c"
        }
    };

    return (
        <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={sectionStackTokens} wrap>
            <Stack.Item align="center">
                <PrimaryButton href="/" styles={buttonStyles}>
                    {"Home"}
                </PrimaryButton>
            </Stack.Item>
            {isAuthenticated ? (
                <>
                    <Stack.Item align="center">
                        <PrimaryButton href="/timetable" styles={buttonStyles}>
                            {"Timetable"}
                        </PrimaryButton>
                    </Stack.Item>
                    <Stack.Item align="center">
                        <PrimaryButton href="/admin" styles={buttonStyles}>
                            {"Admin"}
                        </PrimaryButton>
                    </Stack.Item>
                </>
            ) : (
                <></>
            )}
            <Stack.Item align="center">
                <LoginButton styles={buttonStyles} />
            </Stack.Item>
        </Stack>
    );
};
