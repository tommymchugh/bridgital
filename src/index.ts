/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {scaffoldApp} from './scaffold';
import {createApp} from './app';

const rootElement = scaffoldApp();
createApp(rootElement);
