import { Produto } from "@/core"

export interface ProdutoItemProps {
  produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  return <div>{produto.nome}</div>
}
