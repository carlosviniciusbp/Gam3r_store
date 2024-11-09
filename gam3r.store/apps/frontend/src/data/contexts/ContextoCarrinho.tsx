"use client"
import {
  CalcularParcelamento,
  Carrinho,
  ItemCarrinho,
  Parcelamento,
  Produto,
} from "@gstore/core"
import { createContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export interface ContextoCarrinhoProps {
  itens: ItemCarrinho[]
  qtdeItens: number
  valorTotalCheio: number
  valorTotal: number
  parcelamento: Parcelamento
  // eslint-disable-next-line no-unused-vars
  adicionarItem: (produto: Produto) => void
  // eslint-disable-next-line no-unused-vars
  removerItem: (produto: Produto) => void
  // eslint-disable-next-line no-unused-vars
  removerProduto: (produto: Produto) => void
  limparCarrinho: () => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)

export function ProvedorCarrinho(props: any) {
  const { salvarItem, obterItem } = useLocalStorage()
  const [carrinho, setCarrinho] = useState<Carrinho>(new Carrinho())

  function adicionarItem(produto: Produto) {
    alterarCarrinho(carrinho.adicionarItem(produto))
  }

  function removerItem(produto: Produto) {
    alterarCarrinho(carrinho.removerItem(produto))
  }

  function removerProduto(produto: Produto) {
    alterarCarrinho(carrinho.removerProduto(produto))
  }

  function limparCarrinho() {
    alterarCarrinho(carrinho.limpar())
  }

  function alterarCarrinho(carrinho: Carrinho) {
    salvarItem("carrinho", carrinho.itens)
    setCarrinho(carrinho)
  }

  useEffect(() => {
    const itensSalvos: ItemCarrinho[] = obterItem("carrinho")
    if (itensSalvos) setCarrinho(new Carrinho(itensSalvos))
  }, [obterItem])

  return (
    <ContextoCarrinho.Provider
      value={{
        itens: carrinho.itens,
        qtdeItens: carrinho.qtdeItens,
        valorTotal: carrinho.valorTotal,
        valorTotalCheio: carrinho.valorTotalCheio,
        parcelamento: new CalcularParcelamento().executar(carrinho.valorTotal),
        adicionarItem,
        removerItem,
        removerProduto,
        limparCarrinho,
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  )
}

export default ContextoCarrinho
