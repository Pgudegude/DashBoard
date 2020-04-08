import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router'
import { LoginService } from 'src/app/service/login.service';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';
import { Login } from 'src/app/model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: boolean
  password: any
  formularioLogin: FormGroup;
  esqueciSenha: FormGroup


  constructor(private router: Router, private fb: FormBuilder, private http: LoginService, private emissor: EmissorDeEventosService) { }

  ngOnInit() {
    this.criarFormularioDeLogin()
  }


  criarFormularioDeLogin() {
    this.formularioLogin = this.fb.group(
      {
        email: ["",
          Validators.compose([
            Validators.email,
            Validators.required
          ])],
        senha: ['']
      }
    )
    this.gerarForm()
  }

  logando() {
    let user: Login = new Login()
    user.mail = this.formularioLogin.value.email;
    user.password = this.formularioLogin.value.senha;
    if (user.password == "123" && user.mail == "admin@admin.com") {
      this.login = true
      this.router.navigate(["/home"])
      sessionStorage.setItem("usuario", btoa(JSON.stringify(user)))
      // this.emissor.emitirUsuarioLogado()
      // this.http.fazerLogin(user).subscribe(data => {
      //   let login_json = JSON.stringify(data)
      //   sessionStorage.setItem("usuario", btoa(login_json))
      // this.router.navigate(["/home"])
      // }, erro => this.login = false)
    }
    else {
      this.login = true
    }
  }



  gerarForm() {
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
