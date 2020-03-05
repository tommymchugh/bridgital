/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import imageLogo from '../../static/images/logo.svg';
import {styles as containerStyles} from '../styles/nav_bar/navbar_header.jss';

// tslint:disable-next-line: variable-name
const NavBarContainer = styled.div`
  ${containerStyles(null)}
`;

/**
 * Manages the navigation of the application and highlights
 * the Bridgital logo.
 */
class NavBar extends React.Component {
  /**
   * @return {JSX.Element} The navigation bar including logo
   */
  render(): JSX.Element {
    return (
      <NavBarContainer>
        <img
          src={imageLogo}
          style={{
            height: '72px',
            margin: '0px auto',
            display: 'block',
            paddingTop: '10px',
          }}
        />
      </NavBarContainer>
    );
  }
}

const styledNavBar = styled(NavBar)``;

export {styledNavBar as NavBar};
