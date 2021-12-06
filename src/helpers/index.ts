const removeLocalStorageItem = (itemName: string): void => {
    localStorage.removeItem(itemName)
}

const setLocalStorageItem = (itemName: string, value: string): void => {
    localStorage.setItem(itemName, value)
}

const buildQueryParamsString = (params: any): string => {
    let queryParamsString = ''
    const entries: Array<any> = Object.entries(params)
    entries.forEach(([key, value]) => {
        if (value) {
            queryParamsString += `&q=${key}:${value}`
        }
    })
    return queryParamsString
}

const isUserRegistred = (login: string, password: string): boolean => {
    if (login === 'kode@kode.ru' && password === 'Enk0deng') {
        return true
    }
    if (login === 'admin' && password === 'admin') {
        return true
    }
    return false
}

const checkOtpCode = (code: string) => code === '12345'

export {
    removeLocalStorageItem,
    setLocalStorageItem,
    buildQueryParamsString,
    isUserRegistred,
    checkOtpCode,
}
