import BannerCompra from "@/components/produto/BannerCompra"
import InformacoesProduto from "@/components/produto/InformacoesProduto"
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado"
import TituloProduto from "@/components/produto/TituloProduto"
import { produtos } from "@/core"

export default function PaginaProduto(props: any) {
  const id = +props.params.id
  const produto = produtos.find((produto) => produto.id === id)
  return produto ? (
    <div className="container flex flex-col gap-20 py-10">
      <div className="flex flex-col gap-10">
        <TituloProduto produto={produto} />
        <InformacoesProduto produto={produto} />
        <BannerCompra produto={produto} />
      </div>
    </div>
  ) : (
    <ProdutoNaoEncontrado />
  )
}
