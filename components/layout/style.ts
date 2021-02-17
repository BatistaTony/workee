import { createGlobalStyle } from 'styled-components';
import colors from '@/utils/colors';

export const GlobalStyle = createGlobalStyle`

* {
    padding:0;
    margin:0;
    scroll-behavior:smooth;
}

body  {
    background: ${colors.bg};
}



`;
