import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchUsers } from "../service/users"

export const useUsers = () => {
  const {
    data,
    isError,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  return {
    users: data ? data.pages.flatMap(page => page.users) : [],
    isError,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
  }
}
