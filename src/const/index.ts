const AUTH_ERROR_MESSAGE = 'login or password is incorrect'
const OTP_ERROR_MESSAGE = 'code is incorrect'
const BASE_URL_POKEMONS_API = 'https://api.pokemontcg.io/v2/'
const MAX_POKEMONS_COUNT = 9
const PAGE_COUNT_PER_PAGE = 5

enum PokemonApi {
    cards = 'cards',
    types = 'types',
    subtypes = 'subtypes',
}
export {
    AUTH_ERROR_MESSAGE,
    OTP_ERROR_MESSAGE,
    BASE_URL_POKEMONS_API,
    MAX_POKEMONS_COUNT,
    PAGE_COUNT_PER_PAGE,
    PokemonApi,
}
