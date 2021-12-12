interface IPokemonCardsItem {
    id: string
    name: string
    artist: string
    images: { small: string; large: string }
}

interface IPokemonCardsResponse {
    data: [IPokemonCardsItem]
    totalCount: number
}

interface IPokemonCard {
    id: string
    name: string
    supertype: string
    subtypes: [string]
    types: [string]
    hp: string
    images: { small: string; large: string }
    flavorText?: string
    attacks: [
        {
            name: string
            cost: [string]
            convertedEnergyCost: number
            damage: string
            text: string
        }
    ]
    weaknesses: [
        {
            type: string
            value: string
        }
    ]
}

interface IPokemonCardResponse {
    data: IPokemonCard
}

export type {
    IPokemonCardsResponse,
    IPokemonCardsItem,
    IPokemonCardResponse,
    IPokemonCard,
}
