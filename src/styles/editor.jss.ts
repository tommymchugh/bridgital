/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';
import {Style, StyleContainer, genStyleBuilder} from '../utils/utils';

export enum Component {
  Container
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
    background: ${theme.colors.backgroundDark};
    width: 100%;
    height: calc(100% - ${theme.heights.navbar +
      theme.heights.projectPicker}px);
  `;
  }
);

export const styles = genStyleBuilder(editorStylesMap);
