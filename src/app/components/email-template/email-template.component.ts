//@angular
import { Location } from '@angular/common';
import { Component } from '@angular/core';
//external
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// models
import { EmailInfo, MailType } from '../../models/emailInfo.model';
// services
import { EmailInfoService } from '../../services/email-info.service';

@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
})
export class EmailTemplateComponent {
  // Variables
  public Editor: any = ClassicEditor;

  emailInfo: EmailInfo = {
    logo: '',
    image: '',
    mailType: 1,
    title: 'Reservation Confirmation',
    text: '',
    titleGr: 'Επιβεβαίωση Κράτησης',
    textGr: '',
  };

  titleValue: string = '';
  titleGrValue: string = '';

  isPreview: boolean = false;
  isPreviewGr: boolean = true;

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

  submit() {
    if (this.emailInfo) {
      this.emailInfoService
        .addEmailInfo(this.emailInfo)
        .subscribe(() => this.goBack());
    }
  } // Submit() End

  preview() {
    this.isPreviewGr = false;
    this.isPreview = this.toggle(this.isPreview);
  } // preview() End

  previewGr() {
    this.isPreview = false;
    this.isPreviewGr = this.toggle(this.isPreviewGr);
  } // previewGr() End

  toggle(boolVar: boolean): boolean {
    boolVar == false ? (boolVar = true) : (boolVar = false);
    return boolVar;
  } // toggle() End

  goBack(): void {
    this.location.back();
  } // goBack() End
} // EmailTemplateComponent End

