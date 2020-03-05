/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import {NavBar} from './components/nav_bar';

import {styles as containerStyles} from './styles/container.jss';
import {styles as appStyles} from './styles/app.jss';

// tslint:disable-next-line: variable-name
const Container = styled.div`
  ${containerStyles}
`;

/**
 * The main interface to all Bridigital UI components.
 */
class App extends React.Component {
  /**
   * The render function that will create and maintain
   * the Bridigital application.
   * @return {JSX.Element} The react element(s) that will be rendered.
   */
  render(): JSX.Element {
    return (
      <Container>
        <NavBar />
      </Container>
    );
  }
}

/**
 * Renders the react application onto the root element.
 * @param {HTMLElement} root The html element the react app will be attach to.
 */
export function createApp(root: HTMLElement) {
  // tslint:disable-next-line: variable-name
  const StyledApp = styled(App)`
    ${appStyles(null)}
  `;
  ReactDOM.render(<StyledApp />, root);
}
