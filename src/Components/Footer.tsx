import * as React from 'react';
import './Footer.css';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

import {
  DefaultButton,
  IStackStyles,
  Stack,
  IStackTokens,
} from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { Icon } from '@fluentui/react/lib/Icon';

const intervalDelay = 100;
const intervalIncrement = 0.01;

export const FooterExample: React.FunctionComponent = () => {
  const [percentComplete, setPercentComplete] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setPercentComplete((intervalIncrement + percentComplete) % 1);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <Stack horizontal horizontalAlign="space-evenly" className="inside">
      <ProgressIndicator label="CPU %" percentComplete={percentComplete} />
      <ProgressIndicator label="Network %" percentComplete={percentComplete} />
      <ProgressIndicator label="Memory %" percentComplete={percentComplete} />
      <ProgressIndicator label="Power %" percentComplete={percentComplete} />
    </Stack>
  );
};
