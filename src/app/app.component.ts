import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode';

  colors = [];

  fillColors() {
      for(let i = 0; i < 35; i++){
        const randomNum = (Math.floor(Math.random() * 5)) + 1;
        if(randomNum === 1){
            this.colors.push('#B9BFBE');
        } else if(randomNum === 2){
            this.colors.push('#7C7F7F');
        } else if(randomNum === 3){
            this.colors.push('#F7FFFE');
        } else if(randomNum === 4){
            this.colors.push('#3E403F');
        } else if(randomNum === 5){
            this.colors.push('#DEE5E4');
        }
      }
    }
    ngOnInit(){
        this.fillColors();
    }
}
