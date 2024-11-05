import { Produto } from "@gstore/core"
import NotaReview from "../shared/NotaReview"

export interface AvaliacoesUsuariosProps {
  produto: Produto
}

export default function AvaliacoesUsuarios(props: AvaliacoesUsuariosProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">⭐</span>
        <span className="text-2xl font-semibold">Avaliações dos Usuários</span>
      </div>
      <p className="font-light text-zinc-300">
        O produto é elogiado por seu desempenho, qualidade de som e praticidade.
        Os clientes destacam o bom custo-benefício, a qualidade do microfone
        embutido e a facilidade de instalação. Alguns mencionam que o produto é
        ideal para jogos e que o desempenho é excelente, mesmo sem placa de
        vídeo dedicada. Outros destacam a qualidade do som e o conforto do fone
        de ouvido.
      </p>
      <div className="mt-5 flex items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <div className="text-7xl text-pink-600">{props.produto.nota}</div>
          <NotaReview nota={props.produto.nota} tamanho={18} />
          <div className="text-sm font-light text-zinc-300">
            (198 Comentários)
          </div>
        </div>
        <div className="flex h-32 flex-1 items-center rounded-xl bg-violet-dark/50">
          <ul className="flex list-disc flex-col gap-1 px-10">
            <li>Desempenho excelente.</li>
            <li>Custo benefício ótimo.</li>
            <li>Gráfico dedicado.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
