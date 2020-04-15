
export class Cliente {
    constructor(
      public nomeCompleto?: string, 
      public cpf?: string,
      public dataDeNascimento?: Date,
      public telefone?: number,
      public email?: string,
      public senha?: string,
      public id?:number
      ) {}  
}