import * as React from 'react';
import * as ReactDOM from 'react-dom';

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
    return <h1>Hello World</h1>;
  }
}

/**
 * Renders the react application onto the root element.
 * @param {HTMLElement} root The html element the react app will be attach to.
 */
export function createApp(root: HTMLElement) {
  ReactDOM.render(<App />, root);
}
