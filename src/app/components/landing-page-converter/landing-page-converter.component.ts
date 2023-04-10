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
  color = 'red';

  closeIcon = faWindowClose;
  plusIcon = faPlus;
  specsIcon = faStickyNote;
  
  isLogoSpecs = false;

  landingPage: LandingPage = {
    id: 1,
    name: 'Landing Page 1',
    logo: {
      url: 'https://www.i-host.gr/content/customers/img/aleria/logo.png',
      width: '200px',
      height: '200px',
    },
    background: 'https://www.i-host.gr/content/links/images/costanavarino/bg.jpg',
    fontFace : {
      fontFamily: '',
      // fontFamily: 'sans-serif',
      src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
    },
    link: {
      text: '',
      url: '',
      bgColor: 'red',
      color: 'white',
    },
  };

  non_display(){
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

  display(){
    console.log('display');
    // const language = document.querySelector('language');
    const language = document.getElementById('language');
    const plus = document.getElementById('plus-icon');
    const close = document.getElementById('close-icon');

    if (language !== null && plus !== null && close !== null) {
      language.style.display = 'block';
      close.style.display = 'inline';
      plus.style.display = 'none';
    }
  }

   displaySpecs(){
    console.log('displaySpecs');
    const close = document.getElementById('close-bg');
    const background = document.getElementById('background');
    if (background !== null && close !== null) {
      background.style.display = 'block';
      close.style.display = 'inline';
    }
  }

  non_display_bg(){
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
  previewTemplate = '';
  
  // Functions
    
  constructor(public sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.updatePreviewTemplate();
  }
  
  applyStyles() {
    const styles = {'width': '100%',
    'height': '100%',
    'background-image': `url('${this.landingPage.background}')`,
    'background-size': 'cover'};
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
  isLogoSpecs = true;
}
  
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
