import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cadastrar(){
    return new Promise(resolve =>{
      let dados = {
        requisicao: 'add',
        nome: this.nome,
        usuario: this.Cliente,
        senha: this.senha,
        nivel: this.nivel
      };
      this.provider.dadosApi(dados,'api.php').subscribe(data=>{
        console.log(data);
        this.route.navigate(['usuarios'])
      });
    })
  }}
