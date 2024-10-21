import { IconShoppingCart } from "@tabler/icons-react"

export interface IconeCarrinhoProps {
  qtdeItens: number
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-violet-dark">
      <IconShoppingCart size={30} stroke={1.3} />
      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-semibold text-white">
        {props.qtdeItens ?? 0}
      </div>
    </div>
  )
}
