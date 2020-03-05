/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from '../theme.jss';

const styles = (props: {} | null): string => {
  return `
    background-color: ${theme.backgroundDark};
    height: 95px;
    width: 100%;
  `;
};

export {styles};