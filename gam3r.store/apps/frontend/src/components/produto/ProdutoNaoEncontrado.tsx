import { IconDevicesPcOff } from "@tabler/icons-react"
import Link from "next/link"

export interface ProdutoNaoEncontradoProps {
  semBotaVoltar?: boolean
}

export default function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-violet-300">
      <IconDevicesPcOff size={180} stroke={0.5} />
      <span className="font-light text-violet-300">Produto não encontrado</span>
      {!props.semBotaVoltar && (
        <Link href="/" className="button mt-5 bg-violet-700 text-white">
          Voltar
        </Link>
      )}
    </div>
  )
}
