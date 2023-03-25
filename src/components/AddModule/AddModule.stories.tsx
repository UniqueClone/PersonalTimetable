import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AddModule as AddModuleComponent } from "./AddModule";
import { Stack } from "@fluentui/react";

export default {
    title: "Components/AddModule",
    component: AddModuleComponent
} as ComponentMeta<typeof AddModuleComponent>;

export const AddModule: ComponentStory<typeof AddModuleComponent> = () => (
    <Stack horizontalAlign="center" tokens={{ childrenGap: 20 }}>
        <AddModuleComponent />
    </Stack>
);
