"use client"
import { createContext, useCallback, useEffect, useState } from "react"
import { FiltrarProdutos, Produto } from "@gstore/core"
import useAPI from "../hooks/useAPI"

export interface ContextoProdutosProps {
  produtos: Produto[]
  pesquisa: string
  // eslint-disable-next-line no-unused-vars
  setPesquisa: (pesquisa: string) => void
  // eslint-disable-next-line no-unused-vars
  produtoPorId: (id: number) => Produto | null
}

const ContextoProdutos = createContext<ContextoProdutosProps>({} as any)

export function ProvedorProdutos(props: any) {
  const { httpGet } = useAPI()
  const [pesquisa, setPesquisa] = useState<string>("")
  const [produtos, setProdutos] = useState<Produto[]>([])

  const carregarProdutos = useCallback(async () => {
    const produtos = await httpGet("/produtos")
    setProdutos(produtos ?? [])
  }, [httpGet])

  useEffect(() => {
    carregarProdutos()
  }, [carregarProdutos])

  return (
    <ContextoProdutos.Provider
      value={{
        pesquisa,
        get produtos() {
          if (!pesquisa) return produtos
          return new FiltrarProdutos().executar(pesquisa, produtos)
        },
        setPesquisa,
        produtoPorId: (id: number) =>
          produtos.find((produto) => produto.id === id) ?? null,
      }}
    >
      {props.children}
    </ContextoProdutos.Provider>
  )
}

export default ContextoProdutos
