const buildQueryParamString = (params: { [key: string]: string }): string => {
    const entries: Array<[string, string]> = Object.entries(params)

    if (entries.length === 0) {
        return ''
    }

    let queryParamString = '&q='
    entries.forEach(([key, value]) => {
        if (value) {
            queryParamString += `${key}:${value} `
        }
    })
    return queryParamString
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

const buildPageNumbers = (
    currentPage: number,
    totalPageCount: number,
    buttonsCount: number
) => {
    const pages = []
    let firstPage = Math.max(1, currentPage - Math.floor(buttonsCount / 2))
    let lastPage = Math.min(
        totalPageCount,
        currentPage + Math.floor(buttonsCount / 2)
    )

    if (lastPage - firstPage + 1 < buttonsCount) {
        if (currentPage < totalPageCount / 2) {
            lastPage = Math.min(
                totalPageCount,
                lastPage + (buttonsCount - (lastPage - firstPage))
            )
        } else {
            firstPage = Math.max(
                1,
                firstPage - (buttonsCount - (lastPage - firstPage))
            )
        }
    }

    if (lastPage - firstPage + 1 > buttonsCount) {
        if (currentPage > totalPageCount / 2) {
            firstPage += 1
        } else {
            lastPage -= 1
        }
    }

    for (let i = firstPage; i <= lastPage; i += 1) {
        pages.push(i)
    }

    return pages
}

const checkOtpCode = (code: string) => code === '12345'

export {
    buildQueryParamString,
    isUserRegistred,
    checkOtpCode,
    buildPageNumbers,
}
