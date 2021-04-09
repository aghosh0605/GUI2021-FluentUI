import React from 'react';
import './App.css';
import { initializeIcons } from '@uifabric/icons';

import { NavBasicExample } from './Components/NavBar';
import { ButtonSplitExample } from './Components/CommandBar';
import { HeaderExample } from './Components/Header';
import { FooterExample } from './Components/Footer';
import { SliderVerticalExample } from './Components/Body';

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <HeaderExample />
      {/* <NavBasicExample /> */}
      <ButtonSplitExample />
      <SliderVerticalExample />
      <FooterExample />
    </div>
  );
};
