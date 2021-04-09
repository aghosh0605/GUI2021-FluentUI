import * as React from 'react';
import './CommandBar.css';
import {
  DefaultButton,
  IContextualMenuProps,
  Stack,
  IStackTokens,
} from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};
// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonSplitExample: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;

  return (
    <div className="CommandBarExample">
      <Stack horizontal wrap tokens={stackTokens}>
        <DefaultButton
          id="auto"
          text="Auto"
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          checked={checked}
        />
        <DefaultButton
          id="bio"
          text="BIO"
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          checked={checked}
        />
        <DefaultButton
          id="er"
          text="ER"
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          checked={checked}
        />
        <DefaultButton id="clear" text="Clear All" onClick={_alertClicked} />
      </Stack>
    </div>
  );
};

function _alertClicked() {
  alert('Clicked');
}
