import { Checkbox } from "@fluentui/react";
import { ControlledCheckboxProps } from "./ControlledCheckboxProps";
import { useCallback } from "react";

export const ControlledCheckbox: React.FC<ControlledCheckboxProps> = props => {
    const { name, isChecked, setIsChecked } = props;

    const onChange = useCallback((ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean): void => {
        setIsChecked(!!checked);
    }, []);

    return <Checkbox label={name} checked={isChecked} onChange={onChange} />;
};
