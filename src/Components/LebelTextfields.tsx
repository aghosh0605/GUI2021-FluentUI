import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  Stack,
  IStackProps,
  IStackStyles,
} from 'office-ui-fabric-react/lib/Stack';

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

export const TextFieldBorderlessExample: React.FunctionComponent = () => {
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField
          label="Disabled:"
          underlined
          disabled
          defaultValue="I am disabled"
        />
      </Stack>
      <Stack {...columnProps}></Stack>
    </Stack>
  );
};
