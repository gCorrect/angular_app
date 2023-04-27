export interface LandingPage {
  id: number;
  name: string;
  logo: {
    url: string;
    width: string;
    height: string;
    borderSize: string;
  },
  background: string;
  fontFace : {
    fontFamily: string;
    src: string;
  },
  text: {
    content: string;
    color: string;
    backgroundColor: string;
    padding: string;
    borderRadius: string;
  },
  link: {
    url: string;
    width: string;
    button:{
      text: string;
      color: string;
      bgColor: string;
      margin: string;
      padding: string;
      borderRadius: string;
    },
  };
  links: Array<LinkCustom>,
}

export class LinkCustom {
  url?: string;
    width?: string;
    button?:{
      text: string;
      color: string;
      bgColor: string;
      margin: string;
      padding: string;
      borderRadius: string;
    }
}