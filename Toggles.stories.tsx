import { ReactNode } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {
  SimpleToggle as ToggleComponent,
  ToggleWithIcon as ToggleWithIconComponent,
  ToggleWithLabelDescription as ToggleLableDescriptionComponent,
} from "common";

// Toggle with icon props types

interface ToggleIconProps {
  unCheckIcon?: ReactNode;
  checkedIcon?: ReactNode;
}

// Toggle with label and description props

interface ToggleLabelDescriptionProps {
  label: string;
  description: string;
}

export default {
  title: "common/Toggles",
  component: ToggleComponent,
} as ComponentMeta<typeof ToggleComponent>;

// Simple Toggle

const Template: ComponentStory<typeof ToggleComponent> = () => {
  const onToggle = (): void => {
    alert(`Value change`);
  };

  return <ToggleComponent changeSelected={onToggle}></ToggleComponent>;
};

//  Toggle With Icon

const ToggleIcon: ComponentStory<typeof ToggleWithIconComponent> = (
  args: ToggleIconProps
) => {
  const onToggle = (): void => {
    alert(`Value change`);
  };

  return (
    <ToggleWithIconComponent
      changeSelected={onToggle}
      {...args}
    ></ToggleWithIconComponent>
  );
};

//  Toggle With Label and Description

const ToggleLabelDescription: ComponentStory<
  typeof ToggleLableDescriptionComponent
> = (args: ToggleLabelDescriptionProps) => {
  const onToggle = (): void => {
    alert(`Value change`);
  };

  return (
    <ToggleLableDescriptionComponent
      changeSelected={onToggle}
      {...args}
    ></ToggleLableDescriptionComponent>
  );
};

// Simple Toggle

export const SimpleToggle = Template.bind({});
SimpleToggle.args = {};

//  Toggle With Iccon

export const ToggleWithIcon = ToggleIcon.bind({});
ToggleWithIcon.args = {
  unCheckIcon: (
    <svg
      className="h-3 w-3 text-gray-400"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
  checkedIcon: (
    <svg
      className="h-3 w-3 text-indigo-600"
      fill="currentColor"
      viewBox="0 0 12 12"
    >
      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
    </svg>
  ),
};

//  Toggle With Label Description

export const ToggleWithLabelDescription = ToggleLabelDescription.bind({});
ToggleWithLabelDescription.args = {
  label: "Available to hire",
  description: "Description for hiring",
};
