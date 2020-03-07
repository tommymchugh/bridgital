import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    colors: {
      backgroundLight: string
      backgroundDark: string
    },
    heights: {
      navbar: number,
      projectPicker: number
    }
  }
}