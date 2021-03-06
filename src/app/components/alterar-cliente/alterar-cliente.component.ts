import { Endereco } from './../../model/endereco';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { FormBuilder } from '@angular/forms';
import { EnderecoService } from 'src/app/service/endereco.service';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.component.html',
  styleUrls: ['./alterar-cliente.component.css']
})
export class AlterarClienteComponent implements OnInit {
  endereco: any = []
  formAlterar: FormGroup
  escolha: boolean = false
  alterar: boolean = true
  end: Endereco = new Endereco("", "", "", "", "", "", "", "")

  constructor(private http: HttpService, private construirForm: FormBuilder, private serviceCliente: ClienteService, private serviceEndereco: EnderecoService) { }

  ngOnInit() {
    this.criarAlteracoes()
  }


  capturarCEP() {
    console.log(this.formAlterar.value._cep)
    
    this.http.getCep(this.formAlterar.value).subscribe((data) => {
      this.end.setEndereco(data.cep, data.logradouro, data.bairro, data.uf, data.localidade)
      this.formAlterar.controls['_endereco'].patchValue(this.end.endereco);
      this.formAlterar.controls['_bairro'].patchValue(this.end.bairro);
      this.formAlterar.controls['_estado'].patchValue(this.end.estado);
      this.formAlterar.controls['_cidade'].patchValue(this.end.cidade);
    })
  }


  puxarCliente() {
    let dados = this.formAlterar.value.idClient
    this.serviceCliente.findById(dados).subscribe(data => {
      let cliente: any = {}
      cliente = data
      this.formAlterar.controls['name']?.patchValue(cliente.name)
      this.formAlterar.controls['cpf']?.patchValue(cliente.cpf)
      this.formAlterar.controls['birthDate']?.patchValue(cliente.birthDate)
      this.formAlterar.controls['mail']?.patchValue(cliente.mail)
      this.formAlterar.controls['phone']?.patchValue(cliente.phone)
      this.formAlterar.controls['password']?.patchValue(cliente.password)
      this.serviceEndereco.pegarEndereco(data).subscribe(address => {
        this.endereco = address
      }
      )
    })
  }


  enderecoEscolhido(endereco: Endereco) {
    this.escolha = true
    this.formAlterar.controls['_id'].patchValue(endereco._id)
    this.formAlterar.controls['_cep'].patchValue(endereco._cep)
    this.formAlterar.controls['_cidade'].patchValue(endereco._cidade)
    this.formAlterar.controls['_estado'].patchValue(endereco._estado)
    this.formAlterar.controls['_endereco'].patchValue(endereco._endereco)
    this.formAlterar.controls['_bairro'].patchValue(endereco._bairro)
    this.formAlterar.controls['_numero'].patchValue(endereco._numero)
    this.formAlterar.controls['_complemento'].patchValue(endereco._complemento)
  }


  criarAlteracoes() {
    this.formAlterar = this.construirForm.group({
      name: [
        '',
        Validators.compose([
          Validators.required
        ])],
      cpf: ['',
        Validators.compose([
          Validators.required
        ])],
      birthDate: [
        '',
        Validators.compose([
          Validators.required
        ])],
      phone: [
        '',
        Validators.compose([
          Validators.required
        ])],
      mail: [
        '',
        Validators.compose([
          Validators.required
        ])],
      password: [
        '',
        Validators.compose([
          Validators.required
        ])],
      idClient: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _cep: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _endereco: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _bairro: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _numero: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _estado: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _cidade: [
        '',
        Validators.compose([
          Validators.required
        ])],
      _complemento: [
        '',
        Validators.compose([
        ])],
      _id: [
        '',
        Validators.compose([
          Validators.required
        ])],
    })
  }

  alterarEndereco(){
    if (confirm("Confirme suas alterações!")) {
    this.serviceEndereco.alterar(this.formAlterar.value).subscribe(() => {
      alert("Endereço alterado!")
      this.formAlterar.reset()
    })
  }
  }


  alterarCliente() {
    if (confirm("Confirme suas alterações!")) {
      console.log(this.formAlterar.value)
      this.serviceCliente.alterar(this.formAlterar.value).subscribe(() => {
        alert("Cliente alterado!")
        this.formAlterar.reset()
      })
    }
  }

}
