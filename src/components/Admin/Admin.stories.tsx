import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Admin } from "./Admin";

export default {
    title: "Pages/Admin",
    component: Admin
} as ComponentMeta<typeof Admin>;

export const AdminPage: ComponentStory<typeof Admin> = () => <Admin />;
