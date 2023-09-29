import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1 = '';
  num2 = '';
  resultado = 0;
  operacion: string | null = null; 

  calcular() {
    if (this.operacion === null) {
      return;
    }

    switch (this.operacion) {
      case 'suma':
        this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
        break;
      case 'resta':
        this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
        break;
      case 'mul':
        this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
        break;
      case 'div':
        this.resultado = parseFloat(this.num1) / parseFloat(this.num2);
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}


