export interface PokemonCard {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level: string
  hp: string
  types: string[]
  evolvesFrom: string
  abilities: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: string[]
  convertedRetreatCost: number
  number: string
  artist: string
  rarity: string
  flavorText: string
  nationalPokedexNumbers: number[]
  legalities: Legalities
  images: Images
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
}

export interface Images {
  small: string
  large: string
}