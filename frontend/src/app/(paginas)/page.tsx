import ProdutoItem from "@/components/produto/ProdutoItem"
import { produtos } from "@/core"

export default function Home() {
  return (
    <div className="container flex flex-col gap-5 py-10">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  )
}
