export const appLinks: AppLink[] = [
    {
        name: "PokeStore",
        path: "/cardshop"
    },
    {
        name:"projetos",
        path: "/projetos"
    }
]

export interface AppLink {
    path: string,
    name: string
}