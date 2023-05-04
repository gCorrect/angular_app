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
    bgColor: string;
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
  links: Array<Link>,
}

export class Link {
  url: string = '';
  width: string = '';
  button: Button = new Button();
}

// export interface Link{
//   url: string;
//     width: string;
//     button:{
//       text: string;
//       color: string;
//       bgColor: string;
//       margin: string;
//       padding: string;
//       borderRadius: string;
//     }
// }

export class Button {
  text: string = '';
  color: string   = '';
  bgColor: string = '';
  margin: string = '';
  padding: string = '';
  borderRadius: string = '';
}