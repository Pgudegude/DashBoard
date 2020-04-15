import { Detalhe } from './detalhe';

export class PedidoDetalhe{
    constructor(
        public detalhe: Detalhe,
        public quantidade: number,
    ){}
}