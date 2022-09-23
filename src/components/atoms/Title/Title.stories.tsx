import { Title } from "@/components/atoms/Title";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: Title } as ComponentMeta<typeof Title>;

export const Index: ComponentStoryObj<typeof Title> = {
  args: {},
};
