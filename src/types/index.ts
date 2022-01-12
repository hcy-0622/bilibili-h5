export type SearchStatus = 'default' | 'searching' | 'result'
export type ChangeSearchStatus = (status: SearchStatus) => void
