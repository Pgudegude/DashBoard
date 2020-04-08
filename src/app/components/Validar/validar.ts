import { AbstractControl, FormControl, ControlValueAccessor } from '@angular/forms';

export class Validacoes {
    
    static ConferirSenha(controle: FormControl) {
        const senha = controle.get('senha').value;
        const confirmaSenha = controle.get('confirmaSenha').value;


        if (confirmaSenha.length == 0) {
            return null;
        }
        if (senha == confirmaSenha) {

            return null
        } else {
            controle.get('confirmaSenha').setErrors({ senhaErrada: true });
        }
    }
    static ConferirEmail(controle: FormControl) {
        const email = controle.get('email').value;
        const confirmaEmail = controle.get('confirmaEmail').value;



        if (email === confirmaEmail) {

            return null
        } else if (confirmaEmail != email) {
            return controle.get('confirmaEmail').setErrors({ emailErrado: true });;
        }

    }
}