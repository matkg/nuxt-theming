export interface CatalogItem {
  name: string
  description: string
  to?: string
}

export interface CatalogGroup {
  label: string
  icon: string
  items: CatalogItem[]
}
