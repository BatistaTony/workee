import { createGlobalStyle } from 'styled-components';
import colors from '@/utils/colors';

export const GlobalStyle = createGlobalStyle`

* {
    padding:0;
    margin:0;
}

body  {
    background: ${colors.bg};
}



`;
