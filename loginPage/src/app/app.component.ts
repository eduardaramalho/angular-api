import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginaLogin';
  usuario : string = '';
  senha : string = '';
  logado : boolean = false;

  nome : string = '';
  contato : string = '';
  pessoas : Array<any> =[];  


constructor(private httpClient : HttpClient){ }

public login(){
  this.httpClient.post('http://localhost:3003/login', {name : this.usuario, password : this.senha}).toPromise().then((response : any)=> {
    console.log(response);
    if(response.auth){
      this.logado = true;
      console.log("Logado");
    }
  })
}

public list(){
  this.httpClient.get('http://localhost:3003/Cadastro').toPromise().then((response : any) => {        
    console.log(response);
    this.pessoas = response;
   });
}

public cadastro(){
  this.httpClient.post('http://localhost:3003/cadastro', {nome : this.nome, telefone : this.contato}).toPromise().then((response : any)=> {
    this.list();
  })
}  

public apagar(id : number){
  this.httpClient.delete('http://localhost:3003/cadastro/' + id).toPromise().then((response : any)=> {
   console.log("apagou")
   })
   this.list();
 }

}