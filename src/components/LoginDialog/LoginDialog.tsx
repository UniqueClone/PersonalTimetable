import React from 'react';

import { Dialog, DialogType } from '@fluentui/react';

const LoginDialog: React.FC<{hidden: boolean}> = props => {
    const dialogContentProps = {
        type: DialogType.normal,
        title: "This is a Dialog Box.",
        closeButtonAriaLabel: 'Close',
        subText: 'This will be used for login later.',
        showCloseButton: true
    };

   return (
    <>
        <Dialog {...props} dialogContentProps={dialogContentProps}></Dialog>
    </>);
}


export default LoginDialog;