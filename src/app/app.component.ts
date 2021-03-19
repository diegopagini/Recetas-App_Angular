import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'recetas';
  messageShowed: boolean = true;

  ngOnInit() {
    if (localStorage.getItem('visited')) {
      this.messageShowed = false;
    }
    this.showWelcomeMessage();
  }

  showWelcomeMessage() {
    if (this.messageShowed) {
      let timerInterval;
      Swal.fire({
        title:
          '¡Bienvenido/a! ¡En esta página encontrarás y/o podrás guardar tus recetas favoritas!',
        html: 'Este mensaje se cerrará en <b></b> milisegundos.',
        timer: 3500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b: any = content.querySelector('b');
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      localStorage.setItem('visited', 'isVisited');
    } else {
      return;
    }
  }
}
