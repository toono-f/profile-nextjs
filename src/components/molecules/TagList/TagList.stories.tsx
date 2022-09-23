import { TagList } from "@/components/molecules/TagList";
import { Skills } from "@/data/Skills";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: TagList } as ComponentMeta<typeof TagList>;

export const Index: ComponentStoryObj<typeof TagList> = {
  args: {
    data: Skills,
  },
};
