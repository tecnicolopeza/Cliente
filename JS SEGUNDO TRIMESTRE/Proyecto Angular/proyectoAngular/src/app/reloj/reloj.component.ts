import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

@Input() estilo = '';

  @Output() multiplo10 = new EventEmitter();
  reloj: Date | any;
  constructor() { }

  ngOnInit(): void {
      this.reloj = new Date();
      setInterval(() => {
        this.reloj = new Date();
        if(this.reloj.getSeconds()%10==0){
          this.multiplo10.emit(this.reloj.getSeconds());
        }
      }, 1000);

  }

}
