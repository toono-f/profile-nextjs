import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Footer } from "@/components/organisms/Footer";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;

export default { component: Footer } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
