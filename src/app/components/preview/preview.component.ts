import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'preview',
  template: `<!-- Background -->
  <div style="font-family: sans-serif; background-color: #dbdbdb;padding: 15px; color: #303030">
    <!-- Content Container -->
    <div
         style="box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);background-color: white; width: 660px; max-width: 95%; margin: 15px auto; border-radius: 5px;padding: 15px; line-height: 24px;">

      <img *ngIf="LOGO" style="max-width: 50%; max-height: 100px; margin: 10px auto; display: block;" src="{{LOGO}}">

      <!-- Image -->
      <img *ngIf="IMAGE" style="max-height: 260px;
      max-width: 100%;
      object-fit: contain;
      object-position: center;
      margin-bottom: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 5px;
      margin: 0 auto;
      display: block;
      margin-bottom: 25px;" src="{{IMAGE}}">


      <!-- Heading -->
      <h1 style="text-align: center; font-size: 20px;text-align: center;
  font-size: 25px;
  border-bottom: 2px dashed #ccc;
  padding-bottom: 15px;">{{TITLE}}</h1>


      <!-- Text -->
      <div style="border-bottom: 2px dashed #ccc; padding-bottom: 15px;">


        <!-- CONTENT START -->

        {{TEXT}}

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

  <div class="prev-content">
    <div *ngIf="LOGO != ''">
      <u>Logo</u>: <br />
      {{ LOGO }} <br />
    </div>
    <div *ngIf="IMAGE!= ''">
      <u>Image</u>: <br />
      {{ IMAGE }} <br />
    </div>
    <u>Title</u>: <br />
    {{ TITLE }}
  </div>`,
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements AfterViewInit, OnChanges {
  @Input() LOGO?: string;
  @Input() IMAGE?: string;
  @Input() TITLE?: string;
  @Input() TEXT?: string;

  elRef: ElementRef

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  getHtmlContent() {
    let previewTemplate = this.elRef.nativeElement.innerHTML;
    return previewTemplate;
  }

  ngAfterViewInit(): void {
    console.log(this.getHtmlContent());

  }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes["TITLE"];
    console.log('change : ' + change.currentValue)
  }
} //PreviewComponent End
