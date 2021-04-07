import * as React from 'react';
import '../Styles/NavBar.css';
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from 'office-ui-fabric-react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 228,
    top: 48,
    left: 0,
    opacity: 0.75,
    bottom: 48,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Documents',
        url: 'http://example.com',
        key: 'key3',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Pages',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank',
      },
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
