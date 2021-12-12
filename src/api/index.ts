import axios, { AxiosPromise } from 'axios'
import { BASE_URL_POKEMONS_API, PokemonApi } from '../const'
import { buildQueryParamString } from '../helpers'
import { IPokemonCardsResponse, IPokemonCardResponse } from '../interfaces'

interface ITypesResponse {
    data: Array<string>
}

const axiosInstance = axios.create({
    baseURL: BASE_URL_POKEMONS_API,
})

const getPokemonCards = (
    page: number,
    pageSize: number,
    type: string | '',
    subType: string | ''
): AxiosPromise<IPokemonCardsResponse> => {
    const queryParams = { types: type, subtypes: subType }
    const queryParamsString = buildQueryParamString(queryParams)
    return axiosInstance(
        `${PokemonApi.cards}?page=${page}&pageSize=${pageSize}${queryParamsString}`
    )
}

const getPokemonCard = (id: string): AxiosPromise<IPokemonCardResponse> => {
    return axiosInstance(`${PokemonApi.cards}/${id}`)
}

const getPokemonTypes = (): AxiosPromise<ITypesResponse> =>
    axiosInstance(PokemonApi.types)

const getPokemonSubTypes = (): AxiosPromise<ITypesResponse> =>
    axiosInstance(PokemonApi.subtypes)

export { getPokemonCards, getPokemonCard, getPokemonTypes, getPokemonSubTypes }
