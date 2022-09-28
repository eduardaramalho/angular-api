import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  nome : string = '';
  contato : string = '';
  pessoas : Array<any> =[];  

  constructor(private httpClient : HttpClient){ }

  ngOnInit(): void {
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
