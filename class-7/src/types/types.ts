export type PageType = {
  path: string
  component: React.ComponentType<{ routeParams?: { query?: string } }>
}