/**
 * Copyright (c) Northwestern Inclusive Technology Lab
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import {Component, styles} from '../../styles/editor.jss';

// tslint:disable-next-line: variable-name
const EditorContainer = styled.div`
  ${styles(Component.Container)}
`;

class Editor extends React.Component {
  render(): JSX.Element {
    return <EditorContainer></EditorContainer>;
  }
}

const styledEditor = styled(Editor)``;

export {styledEditor as Editor};
