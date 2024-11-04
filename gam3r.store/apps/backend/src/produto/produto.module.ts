import { Module } from '@nestjs/common'
import { ProdutoController } from './produto.controller'
import { DbModule } from 'src/db/db.module'
import { ProdutoPrismaTs } from './produto.prisma.ts';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrismaTs],
})
export class ProdutoModule {}
