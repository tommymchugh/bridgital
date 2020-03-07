/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';
import {Style, StyleContainer, genStyleBuilder} from '../utils/utils';

export enum Component {
  Container,
  LogoBarItem
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
    background-color: ${theme.colors.backgroundDark};
    height: ${theme.heights.navbar}px;
    width: 100%;
  `;
  }
);

editorStylesMap.set(
  Component.LogoBarItem,
  (props?: {}): Style => {
    return `
    height: 72px;
    margin: 0px auto;
    display: block;
    padding-top: 10px;
  `;
  }
);

export const styles = genStyleBuilder(editorStylesMap);
