import { Component } from '@angular/core';
import { CreditoService } from '../../services/credito.service';
import { Credito } from '../../models/credito.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-consulta-creditos',
  standalone: true,
  templateUrl: './consulta-creditos.component.html',
  styleUrls: ['./consulta-creditos.component.scss'],
  imports: [
    CurrencyPipe,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatTable,
    MatTableModule
  ]
})
export class ConsultaCreditosComponent {
  nfse = '';
  numeroCredito = '';
  creditos: Credito[] = [];
  erro = '';

  displayedColumns: string[] = [
    'numeroCredito',
    'numeroNfse',
    'dataConstituicao',
    'valorIssqn'
  ];

  constructor(private creditoService: CreditoService) {}

  buscarPorNfse() {
    this.creditoService.buscarPorNfse(this.nfse).subscribe({
      next: dados => {
        this.creditos = dados;
        this.erro = '';
      },
      error: () => {
        this.erro = 'NFS-e não encontrada.';
        this.creditos = [];
      }
    });
  }

  buscarPorNumeroCredito() {
    this.creditoService.buscarPorNumeroCredito(this.numeroCredito).subscribe({
      next: credito => {
        this.creditos = [credito];
        this.erro = '';
      },
      error: () => {
        this.erro = 'Crédito não encontrado.';
        this.creditos = [];
      }
    });
  }
}
