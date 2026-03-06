export interface PokemonCard {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level: string
  hp: string
  rules?: string []
  types: string[]
  evolvesTo?: string[]
  evolvesFrom?: string
  abilities?: Ability[]
  attacks: Attack[]
  weaknesses?: Weakness[]
  resistances?: Resistance[]
  retreatCost?: string[]
  convertedRetreatCost?: number 
  number: string
  artist: string
  rarity: string
  flavorText: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: Images
}

export interface Resistance {
  type: string,
  value: string
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Legalities {
  unlimited: string
  expanded?:string
}

export interface Images {
  small: string
  large: string
}