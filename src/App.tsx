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
import { CommandBarExample } from './Components/CommandBar';
import { HeaderExample } from './Components/Header';
import { FooterExample } from './Components/Footer';

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <HeaderExample />
      <NavBasicExample />
      <CommandBarExample />
      <FooterExample />
    </div>
  );
};
