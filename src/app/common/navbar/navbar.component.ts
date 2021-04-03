import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollToBTN() {
    const btn = document.getElementById('modal-trigger');
    const header = document.getElementById('option-container');
    const headerOffset = header.offsetHeight;
    const btnOffset = btn.offsetTop;

    const offsetPosition = btnOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
