import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/produtos.model';
import { Itens } from 'src/app/Model/produto.mock';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
 produtos: Item[] = Itens;
  constructor() { }

  ngOnInit(): void {
  }

}
