import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string = "";
  @Output() updated: EventEmitter<string> = new EventEmitter();

  constructor() { }

  nome: string = 'João';
  cidade: string = 'São Paulo';

  ngOnInit(): void {
    this.nome = this.titulo;
  }

  alterarNome() {
    this.nome = "Wilson";
    this.updated.emit(this.cidade);
    this.cidade = "";
  }
}
