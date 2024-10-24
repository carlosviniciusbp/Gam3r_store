"use client"
import { Moeda, Produto } from "@gstore/core"
import Image from "next/image"
import Link from "next/link"
import NotaReview from "../shared/NotaReview"
import { IconShoppingCartPlus } from "@tabler/icons-react"

export interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  return (
    <Link
      href={`/produto/${props.produto.id}`}
      className="relative flex max-w-[350px] flex-col rounded-xl border border-white/10 bg-violet-dark"
    >
      <div className="absolute right-2.5 top-2.5 flex justify-end">
        <NotaReview nota={produto.nota} />
      </div>
      <div className="relative h-48 w-full">
        <Image
          src={produto.imagem}
          fill
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-white/10 p-5">
        <span className="text-lg font-semibold">{produto.nome}</span>
        <div className="self-start border-b border-dashed text-sm">
          {produto.especificacoes.destaque}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Moeda.formatar(produto.precoBase)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Moeda.formatar(produto.precoPromocional)}
          </span>
          {/* <span className="text-xs text-zinc-400">
            até {parcelamento.qtdeParcelas}x de{" "}
            {Moeda.formatar(parcelamento.valorParcela)}
          </span> */}
        </div>
        <button
          className="flex h-8 items-center justify-center gap-2 rounded-full border-emerald-500 bg-violet-700 hover:border-2"
          onClick={(e) => {
            e.preventDefault()
            console.log("Adicionar ao carrinho")
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  )
}
