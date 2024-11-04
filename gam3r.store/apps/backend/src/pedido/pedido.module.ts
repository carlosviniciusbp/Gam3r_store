import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';

@Module({
  controllers: [PedidoController]
})
export class PedidoModule {}
