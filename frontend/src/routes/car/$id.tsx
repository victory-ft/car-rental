import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import api from '@api/axios'
import type { Car } from '@/types/types'

interface LoaderData {
  car: Car
}

export const Route = createFileRoute('/car/$id')({
  component: RouteComponent,
  loader: async ({ params }): Promise<LoaderData> => {
    const response = await api.get(`/cars/${params.id}`)
    return {
      car: response.data,
    }
  },
})

function RouteComponent() {
  const { car } = useLoaderData({ from: '/car/$id' })

  return <main className="main-content">Hello {car.model}!</main>
}
