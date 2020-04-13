
export class Cliente {
    constructor(
        public name?: string,
        public cpf?: string,
        public birthDate?: Date,
        public phone?: number,
        public mail?: string,
        public password?: string,
        public confirmPassword?: string,
        public confirmMail?: string,
        public idClient?: number
    ) { }
}