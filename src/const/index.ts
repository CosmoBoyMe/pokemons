const AUTH_ERROR_MESSAGE = 'login or password is incorrect'
const OTP_ERROR_MESSAGE = 'code is incorrect'
const BASE_URL_POKEMONS_API = 'https://api.pokemontcg.io/v2/'
const MAX_POKEMONS_CARD_COUNT = 8

enum PokemonApi {
    cards = 'cards',
    types = 'types',
    subtypes = 'subtypes',
}
export {
    AUTH_ERROR_MESSAGE,
    OTP_ERROR_MESSAGE,
    BASE_URL_POKEMONS_API,
    MAX_POKEMONS_CARD_COUNT,
    PokemonApi,
}
