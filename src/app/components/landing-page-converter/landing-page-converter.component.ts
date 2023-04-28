//@angular
import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//fontawesome
import { faEdit, faPlus, faWindowClose, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
// models
import { LandingPage, Link} from '../../models/landingPage.model';
// import { LinkCustom } from '../../models/landingPage.model';
import { fonts, Font } from 'src/app/models/fonts.model';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-landing-page-converter',
  templateUrl: './landing-page-converter.component.html',
  styleUrls: ['./landing-page-converter.component.scss']
})
export class LandingPageConverterComponent implements OnInit {
  
  // Variables
    //icons
  closeIcon = faWindowClose;
  plusIcon = faPlus;
  editIcon = faEdit;
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
    // form display booleans 
  clickedLogo = true; 
  isLogo = true;      
  isLogoSpecs = false;
  clickedText= true; 
  isText= true;
  isTextSpecs = false;

  isLinkSpecs:boolean[] = [false];
  //
  indexLink = 2;
    //Objects
  landingPage: LandingPage = {
    id: 1,
    name: 'Landing Page 1',
    fontFace : {
      // fontFamily: '',
      fontFamily: 'sans-serif',
      src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
    },
    background: 'https://www.i-host.gr/content/links/images/costanavarino/bg.jpg',
    logo: {
      url: 'https://www.i-host.gr/content/customers/img/aleria/logo.png',
      width: '200px',
      height: '200px',
      borderSize: '31px',
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
      width: '400px',
      button: {
        text: 'My Link',
        color: '#ffffff',
        bgColor: '#9f9240',
        margin: '15px auto',
        padding: '10px 20px',
        borderRadius: '5px',
      }
      
    },
    links: [{
      url: 'https://www.aleria.gr/en/menu',
      width: '400px',
      button:  {
        text: 'My Link1',
        color: '#ffffff',
        bgColor: '#9f9240',
        margin: '15px auto',
        padding: '10px 20px',
        borderRadius: '5px',
      }
    }],
  };
  
  fonts: Font[]= fonts;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  // Functions
    // Language
  hideLanguage(){
    console.log('hideLanguage')
    const language  = document.getElementsByClassName('language').item(0) as HTMLElement;
    const close = document.getElementById('close-lang');
    const plus = document.getElementById('plus-icon');

    if (language !== null && close !== null && plus !== null) {
      language.style.display = 'none';
      close.style.display = 'none';
      plus.style.display = 'block';

    }
  }
  displayLanguage(){
    console.log('displayLanguage')
    const language  = document.getElementsByClassName('language').item(0) as HTMLElement;
    const plus = document.getElementById('plus-icon');
    const close = document.getElementById('close-lang');

    if (language !== null && plus !== null && close !== null) {
    console.log('displayLanguage')

      language.style.display = 'block';
      close.style.display = 'inline';
      plus.style.display = 'none';
    }
  }
  languageStyles() {
    const styles = {
      'font-family': `${this.landingPage.fontFace.fontFamily}`,
    };
    return styles;
  }
  
    // Font Face
  displayFontForm(){
    const close = document.getElementById('close-font');
    const fontFaceForm = document.getElementById('font-face-form');
    const fontEditIcon = document.getElementById('font-edit-icon');
    if (fontFaceForm  !== null && close !== null && fontEditIcon !== null) {
      fontFaceForm.style.display = 'flex';
      fontFaceForm.style.flexDirection = 'column';
      close.style.display = 'block';
      close.style.alignSelf = 'flex-end';
      fontEditIcon.style.display = 'none';
    }
  }
  hideFontForm(){
    const background = document.getElementById('font-face-form');
    const close = document.getElementById('close-font');
    const fontEditIcon = document.getElementById('font-edit-icon');
    
    // const plus = document.getElementById('plus-icon');
// 
    if (background !== null && close !== null && fontEditIcon !== null ) {
      background.style.display = 'none';
      close.style.display = 'none';
      fontEditIcon.style.display = 'inline';
      // plus.style.display = 'block';

    }
  }

    // Background Image
  bgStyles() {
    const styles = {
      'background-image': `url('${this.landingPage.background}')`,
      'background-size': 'cover'};
    return styles;
  }
  displayBgForm(){
  const close = document.getElementById('close-bg');
  const background = document.getElementById('background');
  if (background !== null && close !== null) {
    background.style.display = 'block';
    close.style.alignSelf = 'flex-end';
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
  
  // Logo
  logoStyles() {
    let styles = {};
    if(this.landingPage.logo.url === ''){
      styles={'display': 'none'};
    }else{
      styles = {'width': `${this.landingPage.logo.width}`,
      'height': `${this.landingPage.logo.height}`,
      'background-image': `url('${this.landingPage.logo.url}')`,
      };
    }
    return styles;
  }

  logoSpecs() {
    if (this.clickedLogo){
      this.isLogoSpecs = true
      this.clickedLogo = false; 
    }else{
      this.isLogoSpecs = false;
      this.clickedLogo = true;
    }  
  }

  closeLogoDetails() {
    this.isLogoSpecs = false;
  }

  editLogoStyles(){
    const styles = {
      // 'margin-left': this.landingPage.logo.width,
      // 'margin-top': '5em',
    };
    return styles;
  }

  //Text
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
  textSpecs() {
    if (this.clickedText){
      this.isTextSpecs = true
      this.clickedText = false; 
    }else{
      this.isTextSpecs = false;
      this.clickedText = true;
    }  
  
  }
  closeTextDetails() {
    this.isTextSpecs = false;
  }

    // Link
  linkStyles(index: number) {
    const styles = {
      'font-family': `${this.landingPage.fontFace.fontFamily}`,
      'width': `${this.landingPage.links[index].width}`,
  };
    return styles;
  }
  linkButtonStyles(index: number) {
    const styles = {    
      'color': `${this.landingPage.links[index].button.color}`,
      'background-color': `${this.landingPage.links[index].button.bgColor}`,
      'padding': `${this.landingPage.links[index].button.padding}`,
      'border-radius': `${this.landingPage.links[index].button.borderRadius}`,
  };
    return styles;
  }
  linkSpecs(index:number) {
  this.isLinkSpecs[index] = true;
  }
  closeLinkDetails(index:number) {
    this.isLinkSpecs[index] = false;
  }
  addButton(){

    //console.log(this.name,this.empoloyeeID);
    let links= this.landingPage.links;
    // let link: Link = {url: '', width: '', button: {text: '', color: '', bgColor: '', padding: '', borderRadius: ''}, fontFace: {fontFamily: ''}, text: {color: '', backgroundColor: '', padding: '', borderRadius: ''}, logo: {url: '', width: '', height: ''}, background: '}};
    let linkCustObj = new Link();
    linkCustObj.url= 'https://www.mylink.com';
    if(linkCustObj.button){
      linkCustObj.button.text = `My Link${this.indexLink}`;
    }
    links.push(linkCustObj); 
    this.indexLink++;
    this.isLinkSpecs.push(false);
    console.log(links);
  }

  moveLinkUp(index: number){
    let links= this.landingPage.links;
    let tempLink = links[index];
    links[index] = links[index-1];
    links[index-1] = tempLink;
    console.log(links);
  }
  moveLinkDown(index: number){
    let links= this.landingPage.links;
    let tempLink = links[index];
    links[index] = links[index+1];
    links[index+1] = tempLink;
    console.log(links);
  }

  

constructor(public sanitizer: DomSanitizer,) { }

ngOnInit(): void {
  this.updatePreviewTemplate();
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
    
    let previewTemplate = `
    <div class="row">
    <div class="col">
      <div class="venue-buttons" >
        <!-- <a href={{landingPage.link.url}} > -->
        <a href={{landingPage.link.url}} [ngStyle]="linkStyles()" >
          <!-- <button class="btn-undefined" > -->
          <button class="btn-undefined" [ngStyle]="linkButtonStyles()">
            <i class="bi bi-undefined"></i>
            <span>{{landingPage.link.button.text}}</span>
          </button>
        </a>
        <div class="link-options">
          <fa-icon [icon]="specsIcon" class="specs-icon" (click)="linkSpecs()" data-toggle="tooltip" data-placement="top" title="Add link button specs "> </fa-icon>
          <fa-icon [icon]="plusIcon" id="add-btn-icon" (click)="addButton() " data-toggle="tooltip" data-placement="top" title="Add another Link Button"> </fa-icon>
        </div>
      </div><!--venue-buttons -->
    </div>
  </div>
  
    `;
    this.previewTemplate = previewTemplate;
  } //updatePreviewTemplate() End
}
