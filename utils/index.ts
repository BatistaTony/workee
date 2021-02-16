export const addFlexbox = (direction: string, align: string, justify: string) => `

    display:flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};

`;

export const addFont = (font: string = 'Regular') => `

    @font-face {
        src: url(./fonts/Lato/Lato-${font}.ttf);
        font-family: Lato-${font};

    }

    font-family: Lato-${font};

`;
