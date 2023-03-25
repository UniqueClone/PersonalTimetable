import { LoginButtonProps } from "./LoginButtonProps";
import { PrimaryButton } from "@fluentui/react";
import { loginRequest } from "../../authConfig";
import { redirect } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";

const LoginButton: React.FC<LoginButtonProps> = props => {
    const isAuthenticated = useIsAuthenticated();
    const { instance } = useMsal();

    const Login = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
        redirect("/timetable");
    };
    const Logout = () => {
        instance.logout();
        redirect("/");
    };

    return (
        <>
            {isAuthenticated ? (
                <PrimaryButton onClick={Logout} styles={props.styles} text="Logout" />
            ) : (
                <PrimaryButton onClick={Login} styles={props.styles} text="Login / Sign up" />
            )}
        </>
    );
};

export default LoginButton;
