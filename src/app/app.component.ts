import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promo LAPOSTE2';
  description = 'Bonjour, il pleut';
  couleur =  'red';
  user = {
    name : 'patrick',
    age : '42',
    birthday : new Date('1980/01/02')
  };

  getDescription() {
    return this.description.toUpperCase();
  }

  changeTitle() {
     if (this.title === 'promo LAPOSTE2') {
       this.title = 'Decouvre Angular';
     } else  {
       this.title = 'promo LAPOSTE2';
     }
    }
    changeColor() {
      if (this.couleur === 'black') {
        this.couleur = 'red';
      } else if (this.couleur === 'red') {
        this.couleur = 'blue';
      } else {
        this.couleur = 'black';
      }
    }
    logValeur($event) {
      console.log($event.target.value);
    }

    changeCouleur($event) {
      this.couleur = $event.target.value;
    }

    logCheckBox($event) {
      if ($event.target.value === '1') {
        console.log($event.target.value);
      } else {
        console.log('2');
      }
  }

}
