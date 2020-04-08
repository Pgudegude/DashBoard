import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  esqueciSenha:FormGroup


  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(){
    this.criarFormularioDeLogin()
  }


  criarFormularioDeLogin() {
    this.formularioLogin = this.fb.group(
      {
        email:["",
          Validators.compose([
            Validators.email,
            Validators.required
          ])],
        senha: ['']
      }
    )
    this.gerarForm()
  }


  gerarForm(){
    {
      this.esqueciSenha = this.fb.group(
        {
          emailEsqueciSenha: ["",
            Validators.compose([
              Validators.email,
              Validators.required
            ])]
        }
      )
    }
  }


}
