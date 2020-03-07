import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    colors: {
      backgroundLight: string
      backgroundDark: string
    }
  }
}