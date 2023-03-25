/**
 * The props for the ControlledCheckbox component.
 */
export interface ControlledCheckboxProps {
    /**
     * The name of the checkbox.
     * @example "CSC"
     */
    name: string;

    isChecked: boolean;

    setIsChecked: (value: boolean) => void;
}
