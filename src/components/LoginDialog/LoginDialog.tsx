import React from "react";

import { DefaultButton, Dialog, DialogFooter, DialogType, PrimaryButton } from "@fluentui/react";
import { LoginDialogProps } from "./LoginDialogProps";

const LoginDialog: React.FC<LoginDialogProps> = props => {
    const dialogContentProps = {
        type: DialogType.normal,
        title: "Login or Sign Up",
        closeButtonAriaLabel: "Close",
        subText: "Do you want to login or sign up to your personalised timetable?",
        showCloseButton: true
    };

    return (
        <>
            <Dialog {...props} dialogContentProps={dialogContentProps}>
                <DialogFooter>
                    {/* TODO Add login and sign up button functionality */}
                    <PrimaryButton onClick={props.onDismiss} text="Login" />
                    <DefaultButton onClick={props.onDismiss} text="Sign Up" />
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default LoginDialog;
