import * as React from 'react';
import './Header.css';
import { ButtonDefaultExample } from './DefaultButton';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { initializeIcons } from '@uifabric/icons';
import { Icon } from '@fluentui/react/lib/Icon';
function mybtnfun(){
  alert("This is a demo Function");
}
export const HeaderExample = () => {
  return (
    <div className="HeaderExample">
      <button id="icobtn" onClick={mybtnfun}><Icon iconName="Waffle" id="myico"/></button>
      <p id="title">
        RUDRA
      </p>
      <Toggle onText="On" offText="Off" id="Toggle"/>
     
      <DefaultButton text="Kill Switch" id="kill" onClick={mybtnfun}/>
      <DefaultButton text="Drive" id="Drive" onClick={mybtnfun}/>
      <p id="navtxt">
        Heading
      </p>
      <input type="text" id="TextBoxes"/>
      <p id="navtxt">
        Latitude
      </p>
      <input type="text" id="TextBoxes" />
      <p id="navtxt">
        Longitude
      </p>
      <input type="text" id="TextBoxes" />
      <p id="navtxt">
        Altitude
      </p>
      <input type="text" id="TextBoxes"/>
      <button id="icobtn" onClick={mybtnfun}><Icon iconName="AwayStatus" id="myico2"/></button>
      <input type="text" id="Textboxes2" value="Start Timer"/>
      <button id="icobtn" onClick={mybtnfun}><Icon iconName="Ringer" id="myico"/></button>
      <button id="icobtn" onClick={mybtnfun}><Icon iconName="settings" id="myico"/></button>
      <button id="icobtn" onClick={mybtnfun}><Icon iconName="StatusCircleQuestionMark" id="myico3"/></button>

    </div>
  );
};
