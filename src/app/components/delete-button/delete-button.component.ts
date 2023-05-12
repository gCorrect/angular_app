import { Component, Input } from '@angular/core';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Input() index: number = 0;
  @Input() deleteItem?: string;
  @Input() landingPage: any;
  @Input() linkSpecsOpen: any;
  delBtnPressed: boolean = false;
  
  delete(index: number){
    let links= this.landingPage.links;
    links.splice(index,1);
    this.linkSpecsOpen.splice(index,1);
  }

}
