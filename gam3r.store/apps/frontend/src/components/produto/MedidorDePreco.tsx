import { Produto } from "@gstore/core"
import {
  IconChevronDown,
  IconMoodConfuzed,
  IconMoodHappy,
  IconMoodSad,
} from "@tabler/icons-react"

export interface MedidorDePrecoProps {
  produto: Produto
}

export default function MedidorDePreco(props: MedidorDePrecoProps) {
  const {
    menorPreco: minimo,
    maiorPreco: maximo,
    precoPromocional: atual,
    precoMedio: media,
  } = props.produto

  let percentual
  if (atual > media) {
    percentual = ((atual - media) / (maximo - media)) * 50 + 50
  } else {
    percentual = (1 - (media - atual) / (media - minimo)) * 50
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-violet-dark p-7">
      <div className="flex items-center gap-2">
        {percentual >= 40 && percentual < 60 ? (
          <IconMoodConfuzed
            size={40}
            stroke={1.5}
            className="text-yellow-500"
          />
        ) : percentual >= 60 ? (
          <IconMoodSad size={40} stroke={1.5} className="text-red-500" />
        ) : (
          <IconMoodHappy size={40} stroke={1.5} className="text-green-500" />
        )}
        <div className="flex flex-col">
          <div className="flex gap-1.5">
            <span>O preço do produto está </span>
            <div className="font-bold">
              {percentual >= 40 && percentual < 60 ? (
                <span className="text-yellow-500">na média</span>
              ) : percentual >= 60 ? (
                <span className="text-red-500">acima da média</span>
              ) : (
                <span className="text-green-500">abaixo da média</span>
              )}
            </div>
          </div>
          <div className="text-sm text-zinc-400">
            Com base no preço dos últimos{" "}
            <span className="text-white">30 dias</span>.
          </div>
        </div>
      </div>

      <div className="relative flex h-2 items-center rounded-full border-2 border-black bg-gradient-to-r from-green-500 via-yellow-400 to-red-500">
        <div
          className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-white"
          style={{
            left: `${percentual}%`,
          }}
        >
          <IconChevronDown size={20} className="absolute -mt-8 text-white" />
          <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  )
}
