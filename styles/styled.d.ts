import 'styled.components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;
        colors:{
            primary: string;
            seccundary: string;
            dark: string;
            light: string;
        }
        sizeFonts: {
        title: string,
        subTitle: string,
        text: string,
        smallText: string,
    }
    }
}