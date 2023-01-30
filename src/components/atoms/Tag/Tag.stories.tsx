import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Tag } from "@/components/atoms/Tag";

type T = typeof Tag;
type Story = ComponentStoryObj<T>;

export default { component: Tag } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    name: "React",
  },
};
