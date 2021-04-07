import * as React from 'react';
import './NavBar.css';
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from 'office-ui-fabric-react/lib/Nav';

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: '#',
        key: 'key3',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Graphs and Charts',
        url: '#',
        key: 'key4',
        target: '_blank',
      },
      {
        name: 'About',
        url: '#',
        key: 'key4',
        target: '_blank',
      },
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      className="NavBasicExample"
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
