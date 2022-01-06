import { Component, OnInit } from '@angular/core';
import { CartasModel } from '../models/cartas-model';
import { ShowDatosComponent } from '../show-datos/show-datos.component';

@Component({
  selector: 'app-input-formulario',
  templateUrl: './input-formulario.component.html',
  styleUrls: ['./input-formulario.component.css']
})
export class InputFormularioComponent implements OnInit {

  selectedCard: CartasModel = new CartasModel();
/*
  addEdit() {
    if (this.selectedCard.id === 0) {
      this.selectedCard.id = this.cartasmodel_var.length + 1;
      this.cartasmodel_var.push(this.selectedCard);
      console.log("agregado");
    }
    this.selectedCard = new CartasModel();
  }

  openForEdit(i: CartasModel) {
    this.selectedCard = i;
  }

delete() {
    if (confirm("esta seguro de eliminar?")) {
      this.cartasmodel_var = this.cartasmodel_var.filter(x => x !== this.selectedCard)
      this.selectedCard = new CartasModel;
    }

  }
*/


  constructor() { }

  ngOnInit(): void {
  }

}
