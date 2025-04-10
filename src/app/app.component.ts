import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
closeModal() {
throw new Error('Method not implemented.');
}
  title = 'GlitchUi';

  constructor(){

  }

  openmodal(){
    
    const modaldiv = document.getElementById('myModals');
    if(modaldiv != null)
    modaldiv.style.display = 'block';
  }


}
