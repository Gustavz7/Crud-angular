import { Component, OnInit } from '@angular/core';
import { CartasModel } from '../models/cartas-model';
@Component({
  selector: 'app-show-datos',
  templateUrl: './show-datos.component.html',
  styleUrls: ['./show-datos.component.css']
})
export class ShowDatosComponent implements OnInit {
  //usando el modelo, llenar segun su estructura
  //cartasmodel_var es el objeto usable para interpolacion
  cartasmodel_var: CartasModel[] = [
    {id: 1, titulo: "perruno bobi", subtitulo: "perro", descripcion: "perruno bobi del meme", img: true},
    {id: 2, titulo: "perruno guito", subtitulo: "perro", descripcion: "perruno que ya se murio :(", img: true},
    {id: 3, titulo: "perruno bigote", subtitulo: "perruno", descripcion: "perruno guardian de la casa", img: true},
  ];






  constructor() { }

  ngOnInit(): void {
  }

  




}
