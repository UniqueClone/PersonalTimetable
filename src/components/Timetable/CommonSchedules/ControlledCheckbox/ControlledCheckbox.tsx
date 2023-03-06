import { Checkbox } from "@fluentui/react";
import { ControlledCheckboxProps } from "./ControlledCheckboxProps";
import React from "react";

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = props => {
    const [isChecked, setIsChecked] = React.useState(false);
    const onChange = React.useCallback((ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void => {
        setIsChecked(!!checked);
    }, []);

    return <Checkbox label={props.name} checked={isChecked} onChange={onChange} />;
};
