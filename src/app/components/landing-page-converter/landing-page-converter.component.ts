//@angular
import { Component, Renderer2, ViewContainerRef, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//fontawesome
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faStickyNote} from '@fortawesome/free-solid-svg-icons';

// models
import { LandingPage} from '../../models/landingPage.model';

@Component({
  selector: 'app-landing-page-converter',
  templateUrl: './landing-page-converter.component.html',
  styleUrls: ['./landing-page-converter.component.scss']
  // styles: [':host { background-color: #000; }']
  // styles: ['h1 { font-weight: normal; color: {color} }']
})
export class LandingPageConverterComponent implements OnInit {
  
  // Variables
    //icons
  closeIcon = faWindowClose;
  plusIcon = faPlus;
  specsIcon = faStickyNote;
    // form display booleans        
  isLogoSpecs = false;
  isTextSpecs = false;
    //model
  landingPage: LandingPage = {
    id: 1,
    name: 'Landing Page 1',
    fontFace : {
      fontFamily: '',
      // fontFamily: 'sans-serif',
      src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
    },
    background: 'https://www.i-host.gr/content/links/images/costanavarino/bg.jpg',
    logo: {
      url: 'https://www.i-host.gr/content/customers/img/aleria/logo.png',
      width: '200px',
      height: '200px',
    },
    text: {
      content: '@myCompany',
      color: '#ffffff',
      backgroundColor: '#000000d9',
      padding: '20px',
      borderRadius: '5px',
    },
    link: {
      url: 'https://www.aleria.gr/en/menu',
      maxWidth: '400px',
      button: {
        text: 'MyLink',
        color: 'white',
        bgColor: 'red',
        margin: '15px auto',
        padding: '10px 20px',
        borderRadius: '5px',
      }
      
    },
  };
  
  // Functions
    // Language
  hideLanguage(){
    console.log('noneDisplay');
    // const language = document.querySelector('language');
    const language = document.getElementById('language');
    const close = document.getElementById('close-icon');
    const plus = document.getElementById('plus-icon');

    if (language !== null && close !== null && plus !== null) {
      language.style.display = 'none';
      close.style.display = 'none';
      plus.style.display = 'block';

    }
  }
  displayLanguage(){
    const language = document.getElementById('language');
    const plus = document.getElementById('plus-icon');
    const close = document.getElementById('close-icon');

    if (language !== null && plus !== null && close !== null) {
      language.style.display = 'block';
      close.style.display = 'inline';
      plus.style.display = 'none';
    }
  }
    // Font Face
  displayFontForm(){
    console.log('displaySpecs');
    const close = document.getElementById('close-font');
    const background = document.getElementById('font-face-form');
    if (background !== null && close !== null) {
      background.style.display = 'block';
      close.style.display = 'inline';
    }
  }
  hideFontForm(){
    console.log('noneDisplay');
    const background = document.getElementById('font-face-form');
    const close = document.getElementById('close-font');
    
    // const plus = document.getElementById('plus-icon');
// 
    if (background !== null && close !== null ) {
      background.style.display = 'none';
      close.style.display = 'none';
      // plus.style.display = 'block';

    }
  }
    // Background Image
   displayBgForm(){
    console.log('displaySpecs');
    const close = document.getElementById('close-bg');
    const background = document.getElementById('background');
    if (background !== null && close !== null) {
      background.style.display = 'block';
      close.style.display = 'inline';
    }
  }    
  hideBgForm(){
    console.log('noneDisplay');
    const background = document.getElementById('background');
    const close = document.getElementById('close-bg');
    
    // const plus = document.getElementById('plus-icon');
// 
    if (background !== null && close !== null ) {
      background.style.display = 'none';
      close.style.display = 'none';
      // plus.style.display = 'block';

    }
  }
  
  // Functions    
  constructor(public sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.updatePreviewTemplate();
  }
  
  applyStyles() {
    const styles = {
      // 'width': '100%',
      // 'height': '100%',
      'background-image': `url('${this.landingPage.background}')`,
      'background-size': 'cover'};
    return styles;
}

languageStyles() {
  const styles = {
    'font-family': `${this.landingPage.fontFace.fontFamily}`,
  };
  return styles;
}

logoStyles() {
  const styles = {'width': `${this.landingPage.logo.width}`,
  'height': `${this.landingPage.logo.height}`,
  'background-image': `url('${this.landingPage.logo.url}')`,
  'background-size': 'cover'};
  return styles;
}

logoSpecs() {
  this.isLogoSpecs = true;
}

closeLogoDetails() {
  this.isLogoSpecs = false;
}

textSpecs() {
  this.isTextSpecs = true;
}

closeTextDetails() {
  this.isTextSpecs = false;
}


textStyles() {
  const styles = {
    'font-family': `${this.landingPage.fontFace.fontFamily}`,
    'color': `${this.landingPage.text.color}`,
  'background-color': `${this.landingPage.text.backgroundColor}`,
  'padding': `${this.landingPage.text.padding}`,
  'border-radius': `${this.landingPage.text.borderRadius}`,
};
  return styles;
}

linkStyles() {
  const styles = {
    'font-family': `${this.landingPage.fontFace.fontFamily}`,
    'max-width': `${this.landingPage.link.maxWidth}`,
};
  return styles;
}

linkButtonStyles() {
  const styles = {    
    'background-color': `${this.landingPage.link.button.bgColor}`,
    'color': `${this.landingPage.link.button.color}`,
    'padding': `${this.landingPage.link.button.padding}`,
    'border-radius': `${this.landingPage.link.button.borderRadius}`,
};
  return styles;
}


// ==========not in use================
fontStyles() {
  const styles = {'font-family': 'sans-serif',
  };
  return styles;
}

setClose(close: boolean){
  this.isLogoSpecs = false;
  console.log("setClose "+close)
}

previewTemplate = '';

  updatePreviewTemplate() {
    let logo = this.landingPage.logo;
    console.log('logo'+logo)
    let background = this.landingPage.background;
    let title: string | undefined;
    let text: string | undefined;
    let noReply: string | undefined;

    // if (this.isEnglish) {
    //   title = this.landingPage.title;
    //   text = this.landingPage.text;
    //   noReply = this.landingPage.noReply;
    // } else {
    //   title = this.landingPage.titleGr;
    //   text = this.landingPage.textGr;
    //   noReply = this.landingPage.noReplyGr;
    // }

    let previewTemplate = `  <div class="container">
    <!-- lang -->
    <select class="form-control" name="language" id="language" onchange="switchLanguage(this.value)">
        <option value='en' id='en'>English</option>
        <option value='el' id='el'>Greek</option>
    </select>

    <!-- logo -->
    <div class="row">
        <div class="col">
            <div class="venue-logo">
              <img src="${logo}">
            </div>
        </div>
    </div>

    <!-- text -->
    <div class="row">
        <div class="col text-container">
            <div class="venue-text text-center"></div>
        </div>
    </div>

    <!-- buttons -->
    <div class="row">
        <div class="col">
            <div class="venue-buttons"></div>
        </div>
    </div>

    <!-- text below -->
    <div class="row">
        <div class="col text-container">
            <div class="venue-text-below"></div>
        </div>
    </div>

</div>
`;
    this.previewTemplate = previewTemplate;
  } //updatePreviewTemplate() End


}
