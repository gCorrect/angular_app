export interface LandingPage {
  id: number;
  name: string;
  logo: string;
  background: string;
  fontFace : {
    fontFamily: string;
    src: string;
  },
  link: {
    text: string;
    url: string;
    bgColor: string;
    color: string;
  };
}

