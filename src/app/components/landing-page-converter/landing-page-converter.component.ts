//@angular
import { Component, Renderer2, ViewContainerRef, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// models
import { LandingPage} from '../../models/landingPage.model';

@Component({
  selector: 'app-landing-page-converter',
  templateUrl: './landing-page-converter.component.html',
  styleUrls: ['./landing-page-converter.component.scss']
})
export class LandingPageConverterComponent implements OnInit {
  // Variables
  landingPage: LandingPage = {
    id: 1,
    name: 'Landing Page 1',
    logo: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back02.jpg',
    background: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
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

  previewTemplate = '';
  
  // Functions
    
  constructor(public sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.updatePreviewTemplate();
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
