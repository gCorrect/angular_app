import { Component, Input } from '@angular/core';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() LOGO?: string;
  @Input() IMAGE?: string;
  @Input() TITLE?: string;
  @Input() TEXT?: string;

}
