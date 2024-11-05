import { Produto } from "@gstore/core"
import Image from "next/image"
import Especificacoes from "./Especificacoes"

export interface InformacoesProdutoProps {
  produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
  const { produto } = props
  return produto ? (
    <div className="flex items-center rounded-xl bg-violet-dark p-5">
      <div className="relative flex h-96 flex-1 justify-center">
        <Image
          src={produto.imagem!}
          fill
          className="object-cover p-7"
          alt="Imagem do Produto"
        />
      </div>
      <Especificacoes produto={produto!} />
    </div>
  ) : null
}
