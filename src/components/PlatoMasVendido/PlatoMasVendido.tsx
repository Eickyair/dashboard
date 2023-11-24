import { trpc } from '@/utils/trpc'
import React from 'react'

export const PlatoMasVendido = () => {
  const {data} = trpc.ordenRouter.platoMasVendido.useQuery()
  if(data){
    console.log("🚀 ~ file: PlatoMasVendido.tsx:7 ~ PlatoMasVendido ~ data:", data)
  }
  return (
    <div>
      Plato
    </div>
  )
}
