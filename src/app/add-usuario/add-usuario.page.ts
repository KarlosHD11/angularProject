import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promises } from 'dns';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
//id:number=0;
id:string = "";
nome:string = "";
senha:string = "";
nivel:string = "";


  constructor(private route:Router, private provider: Post) { }

  ngOnInit() {
    this.id="1"
  }
  Cliente(){
    this.route.navigate(['cliente']);
  }
  Editar(){
    

  }
  Cadastrar(){
    return new Promise(resolv =>)
    let dados = {
      requisicao: 'add',
      nome: this.nome,
      usuarios: this.Cliente,
      senha: this.senha,
      nivel: this.nivel};


  }
  this.provider.s
}
