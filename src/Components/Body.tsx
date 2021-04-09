import * as React from 'react';
import './Body.css';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import {
  IStackTokens,
  Stack,
  IStackStyles,
} from 'office-ui-fabric-react/lib/Stack';

const stackStyles: Partial<IStackStyles> = { root: { height: 200 } };
const stackTokens: IStackTokens = { childrenGap: 20 };

export interface ISliderVerticalExampleState {
  value: number;
}

/* eslint-disable react/jsx-no-bind */
export const SliderVerticalExample: React.FunctionComponent = () => {
  return (
    <div className="body_main">
      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
        <Slider // prettier-ignore
          label="Basic"
          min={1}
          max={5}
          step={1}
          defaultValue={2}
          showValue
          vertical
        />
        <Slider // prettier-ignore
          label="Controlled"
          max={10}
          vertical
          showValue
        />
        <Slider // prettier-ignore
          label="Formatted value"
          max={100}
          valueFormat={(value: number) => `${value}%`}
          showValue
          vertical
        />
      </Stack>
    </div>
  );
};
