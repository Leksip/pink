import {Component} from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  isActive: boolean;


  onOpen() {
    this.isActive = !this.isActive;
  }
}
