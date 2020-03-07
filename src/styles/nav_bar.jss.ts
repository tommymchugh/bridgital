/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';

const navBarContainerStyles = (props: {} | null = null): string => {
  return `
    background-color: ${theme.colors.backgroundDark};
    height: 95px;
    width: 100%;
  `;
};

const logoBarItemStyles = (props: {} | null = null): string => {
  return `
    height: 72px;
    margin: 0px auto;
    display: block;
    padding-top: 10px;
  `;
};

export enum Component {
  Container,
  LogoBarItem,
}

/**
 * Returns the proper styles for the specific element being generated
 * @param {Component} comp The specific navigation bar component
 *                         type to gen styles.
 * @param {Object | null} props The react properties of the component
 * @return {string} Returns the string styles for styled-comps
 */
export function styles(comp: Component, props: {} | null = null): string {
  if (comp === Component.Container) {
    return navBarContainerStyles(props);
  } else if (comp === Component.LogoBarItem) {
    return logoBarItemStyles(props);
  }
  return '';
}
