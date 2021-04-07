import React from 'react';
import './App.css';
import { initializeIcons } from '@uifabric/icons';

import { ButtonDefaultExample } from './Components/DefaultButton';
import { ButtonSplitExample } from './Components/SplitButton';
import { SliderBasicExample } from './Components/HorizontalSliders';
import { TextFieldBorderlessExample } from './Components/LebelTextfields';
import { TextFieldErrorMessageExample } from './Components/SlideButton';
import { ProgressIndicatorBasicExample } from './Components/DefaultProgressBar';
import { NavBasicExample } from './Components/NavBar';

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <NavBasicExample />
    </div>
  );
};
