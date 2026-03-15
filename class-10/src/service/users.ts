import type { UserType } from "../types";

export const fetchUsers = async ({ pageParam }: { pageParam?: number }): Promise<{ users: UserType[]; nextCursor?: number }> => {
  const response = await fetch(`https://randomuser.me/api/?results=10&seed=abc&page=${pageParam}`)
  if (!response.ok) {
    throw new Error('Error en la petición')
  }
  const data = await response.json()
  const currentPage = Number(data.info.page)
  const nextCursor = currentPage > 10 ? undefined : Number(data.info.page) + 1
  return {
    users: data.results,
    nextCursor: nextCursor
  }
}