import ProdutoItem from "@/components/produto/ProdutoItem"
import Pagina from "@/components/template/Pagina"
import { produtos } from "@/core"

export default function Home() {
  return (
    <Pagina>
      <div className="container grid grid-cols-4">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  )
}
