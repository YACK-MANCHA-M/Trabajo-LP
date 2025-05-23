import { Component } from '@angular/core';
import {operate} from 'rxjs/internal/util/lift';
import {FormsModule} from '@angular/forms';
import {evaluate} from 'mathjs';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone:true,
  imports: [
    FormsModule,
    NgClass,
    NgForOf
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  /*
  num1:number=0;
  num2:number=0;
  result:String="";
  oper:String="";
  visible:boolean=false;

  getNum1(e:any){
    this.num1=e.target.value;

    console.log(e);
  }

  getNum2(e:any){
    console.log(e);
    this.num2=e.target.value;
  }

  operar(oper:string){

    this.oper=oper;
    this.visible=true;
    this.result=eval((this.num1)+oper+(this.num2));*/

  pantalla: string = "";
  bottons:string[]=[
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','+',
    'D','.','=','-',
    'AC'
  ];

  precionarBoton(valor: string) {
    if (valor === "AC") {
      this.pantalla = "";

    } else if (valor === "=") {
      this.calcular();
    } else {
      this.pantalla += valor;
    }
  }

  calcular() {
    try {
      var valor = this.pantalla;
      this.pantalla = evaluate(valor);
    } catch (e) {
      this.pantalla = "Error";
    }
  }
}

