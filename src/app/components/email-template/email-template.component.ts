//@angular
import { Location } from '@angular/common';
import { Component } from '@angular/core';
//external
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// models
import { EmailInfo, MailType } from '../../models/emailInfo.model';
// services
import '../../../assets/js/test.js';
import { EmailInfoService } from '../../services/email-info.service';

declare var saveAs: any;
@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
})
export class EmailTemplateComponent {
  // Variables
  public Editor: any = ClassicEditor;

  emailInfo: EmailInfo = {
    logo: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    image: '',
    mailType: MailType.CONFIRM,
    title: 'Reservation Confirmation',
    text: '',
    titleGr: 'Επιβεβαίωση Κράτησης',
    textGr: '',
  };

  titleValue: string = '';
  titleGrValue: string = '';

  isEnglish: boolean = false;
  isGreek: boolean = true;

  previewTemplate = '';

  // Functions
  constructor(
    private emailInfoService: EmailInfoService,
    private location: Location
  ) { }

  titleValues(): void {
    let mailType = this.emailInfo.mailType;

    // switch
    // switch (mailType) {
    //   case MailType.CONFIRM: {
    //     this.emailInfo.title = 'Reservation Confirmation';
    //     this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
    //     break;
    //   }
    //   case MailType.CANCEL: {
    //     this.emailInfo.title = 'Reservation Cancellation';
    //     this.emailInfo.titleGr = 'Ακύρωση Κράτησης';
    //     break;
    //   }
    //   case MailType.REMINDER: {
    //     this.emailInfo.title = 'Reservation Reminder';
    //     this.emailInfo.titleGr = 'Υπενθύμιση Κράτησης';
    //     break;
    //   }
    //   case MailType.DEPOSIT: {
    //     this.emailInfo.title = 'Payment Request';
    //     this.emailInfo.titleGr = 'Αίτημα Πληρωμής';
    //     break;
    //   }
    //   case MailType.CARDDETAILS: {
    //     this.emailInfo.title = 'Credit Card Details Request';
    //     this.emailInfo.titleGr = 'Αίτημα Καταχώρησης Κάρτας';
    //     break;
    //   }
    //   // default: {
    //   //   this.emailInfo.title = 'Reservation Confirmation';
    //   //   this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
    //   //   console.log("mailType " + mailType)
    //   //   console.log("mailType def " + MailType.CONFIRM)
    //   //   break;
    //   // }
    // }

    if (mailType == MailType.CONFIRM) {
      this.emailInfo.title = 'Reservation Confirmation';
      this.emailInfo.titleGr = 'Επιβεβαίωση Κράτησης';
    } else if (mailType == MailType.CANCEL) {
      this.emailInfo.title = 'Reservation Cancellation';
      this.emailInfo.titleGr = 'Ακύρωση Κράτησης';
    } else if (mailType == MailType.REMINDER) {
      this.emailInfo.title = 'Reservation Reminder';
      this.emailInfo.titleGr = 'Υπενθύμιση Κράτησης';
    } else if (mailType == MailType.DEPOSIT) {
      this.emailInfo.title = 'Payment Request';
      this.emailInfo.titleGr = 'Αίτημα Πληρωμής';
    } else if (mailType == MailType.CARDDETAILS) {
      this.emailInfo.title = 'Credit Card Details Request';
      this.emailInfo.titleGr = 'Αίτημα Καταχώρησης Κάρτας';
    }
  } // titleValues() End

  preview() {
    this.isGreek = false;
    this.isEnglish = this.toggle(this.isEnglish);
  } // preview() End

  previewGr() {
    this.isEnglish = false;
    this.isGreek = this.toggle(this.isGreek);
  } // previewGr() End

  toggle(boolVar: boolean): boolean {
    boolVar == false ? (boolVar = true) : (boolVar = false);
    return boolVar;
  } // toggle() End

  updatePreviewTemplate() {
    let LOGO = this.emailInfo.logo;
    let IMAGE = this.emailInfo.image;
    let TITLE: string | undefined;
    let TEXT: string | undefined;

    if (this.isEnglish) {
      TITLE = this.emailInfo.title;
      TEXT = this.emailInfo.text;
    } else {
      TITLE = this.emailInfo.titleGr;
      TEXT = this.emailInfo.textGr;
    }

    let previewTemplate = `  <!-- Background -->
<div style="font-family: sans-serif; background-color: #dbdbdb;padding: 15px; color: #303030">
  <!-- Content Container -->
  <div
       style="box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);background-color: white; width: 660px; max-width: 95%; margin: 15px auto; border-radius: 5px;padding: 15px; line-height: 24px;">

    <img *ngIf="${LOGO}" style="max-width: 50%; max-height: 100px; margin: 10px auto; display: block;" src="${LOGO}">

    <!-- Image -->
    <img *ngIf="${IMAGE}" style="max-height: 260px;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  margin-bottom: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  margin-bottom: 25px;" src="${IMAGE}">


    <!-- Heading -->
    <h1 style="text-align: center; font-size: 20px;text-align: center;
font-size: 25px;
border-bottom: 2px dashed #ccc;
padding-bottom: 15px;">${TITLE}</h1>


    <!-- Text -->
    <div style="border-bottom: 2px dashed #ccc; padding-bottom: 15px;">


      <!-- CONTENT START -->

      ${TEXT}

      <!-- CONTENT END -->


    </div>

    <!-- Notes -->
    <div style="padding-top: 15px;padding-bottom: 15px;">

      ※ Παρακαλώ μην απαντήσετε σε αυτό το email ("No-Reply") <br /><br />
    </div>


  </div>

  <!-- Powered by -->
  <span style="margin: 40px auto;
display: block;
text-align: center;
margin-bottom: 15px;
color: #646464;
font-size: 12px;
font-family: serif;">powered by</span>
  <a href="https://i-host.io">
    <img style="margin: 0px auto; display: block; width: 100px; margin-bottom: 20px"
         src="https://www.i-host.gr/Content/img/ihost-full-black.png">
  </a>
</div>
`;
    this.previewTemplate = previewTemplate;
  } //updatePreviewTemplate() End

  downloadTemplate() {
    var blob = new Blob([this.previewTemplate],
      { type: "text/plain;charset=utf-8" });
    new saveAs(blob, `${this.emailInfo.mailType}.html`);
  }// downloadTemplate() End

} // EmailTemplateComponent End


