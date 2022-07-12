import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  // segundo=0;
  // @Input() inicio: number=0;
  // @Output() multiplo10 = new EventEmitter();
  // constructor() { }

  // ngOnInit() {
  //   this.segundo = this.inicio;
  //   setInterval(() => {
  //     this.segundo++;
  //     if (this.segundo % 10 == 0)
  //       this.multiplo10.emit(this.segundo);
  //   }, 1000);
  // }
  segundo=0;
  interval: any;
  @Input() inicio: number=0;
  @Output() finalcountdown = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.iniciarCrono();
  }

  resetear(){
    if (this.interval!=null) {
      clearInterval(this.interval);
    }
    this.iniciarCrono();
  }

  iniciarCrono(){
    this.segundo = this.inicio;
    this.interval = setInterval(() => {
      this.segundo--;
      if (this.segundo == 0){
        this.finalcountdown.emit(this.segundo);
        clearInterval(this.interval);
      }
    }, 1000);//el 1000 son milisegundos que es 1 seg
  }

}
