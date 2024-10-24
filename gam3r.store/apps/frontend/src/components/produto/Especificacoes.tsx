import { IconTag } from "@tabler/icons-react"
import { Produto } from "@gstore/core"
import Tag from "../shared/Tag"

export interface EspecificacoesProps {
  produto: Produto
}

export default function Especificacoes(props: EspecificacoesProps) {
  const { produto } = props
  return produto ? (
    <div className="flex flex-1 flex-col gap-1">
      <div className="mb-3 flex">
        <Tag
          label={produto.especificacoes.destaque!}
          icone={IconTag}
          outlined
        />
      </div>
      {produto?.especificacoes &&
        Object.keys(produto.especificacoes)
          .filter((k) => k !== "destaque")
          .map((chave) => (
            <div key={chave} className="flex gap-1">
              <span className="w-1/3 rounded bg-white/5 p-2">{chave}</span>
              <span className="w-2/3 rounded bg-white/5 p-2">
                {produto.especificacoes[chave]}
              </span>
            </div>
          ))}
    </div>
  ) : null
}
