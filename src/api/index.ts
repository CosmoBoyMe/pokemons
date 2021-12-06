import axios, { AxiosPromise } from 'axios'
import { BASE_URL_POKEMONS_API, PokemonApi } from '../const'
import { buildQueryParamsString } from '../helpers'

const axiosInstance = axios.create({
    baseURL: BASE_URL_POKEMONS_API,
})

const getPokemonCards = (
    page: number,
    pageSize: number,
    type: string | '',
    subType: string | ''
): AxiosPromise<any> => {
    const queryParams = { types: type, subtypes: subType }
    const queryParamsString = buildQueryParamsString(queryParams)
    return axiosInstance(
        `${PokemonApi.cards}?page=${page}&pageSize=${pageSize}${queryParamsString}`
    )
}

const getPokemonTypes = (): AxiosPromise<any> => axiosInstance(PokemonApi.types)

const getPokemonSubTypes = (): AxiosPromise<any> =>
    axiosInstance(PokemonApi.subtypes)

const getPokemonCard = (id: string) => {
    return axiosInstance(`${PokemonApi.cards}/${id}`)
}

export { getPokemonCards, getPokemonCard, getPokemonTypes, getPokemonSubTypes }
