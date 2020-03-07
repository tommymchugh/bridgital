/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import imageLogo from '../../static/images/logo.svg';
import styled from 'styled-components';
import {
  styles as containerStyles,
  Component,
} from '../styles/nav_bar.jss';

/**
 *
 */
// tslint:disable-next-line: variable-name
const NavBarContainer = styled.div`
  ${containerStyles(Component.Container)}
`;

/**
 * Controls the UI and actions of the Bridigital
 * logo element on the navigiation bar.
 */
// tslint:disable-next-line: variable-name
const LogoBarItem = styled.img`
  ${containerStyles(Component.LogoBarItem)}
`;

/**
 * Manages the navigation of the application and highlights
 * the Bridgital logo.
 */
class NavBar extends React.Component {
  /**
   * Renders the navigation bar and its subcomponents.
   * @return {JSX.Element} The navigation bar including logo
   */
  render(): JSX.Element {
    return (
      <NavBarContainer>
        <LogoBarItem src={imageLogo} />
      </NavBarContainer>
    );
  }
}

const styledNavBar = styled(NavBar)``;

export {styledNavBar as NavBar};
