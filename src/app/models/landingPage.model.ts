export interface LandingPage {
  id: number;
  name: string;
  logo: {
    url: string;
    width: string;
    height: string;
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
    maxWidth: string;
    button:{
      text: string;
      color: string;
      bgColor: string;
      margin: string;
      padding: string;
      borderRadius: string;
    }
  };
}

