import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input('result') compteur: number;
  @Output() result = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.compteur ++;
    this.result.emit({
      value: this.compteur
    });
  }

  decrement(){
    this.compteur --;
    this.result.emit({
      value: this.compteur
    });
  }

}
