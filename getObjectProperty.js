// по хорошому надо что бы функция возвращяла глубокую копию
const getObjectProperty = (obj, path, defaultValue) => {
    const keys = path.split('.')
    let result = { ...obj }

    keys.forEach((key) => {
        if (!result) {
            result = defaultValue
        } else {
            result = result[key]
        }
    })
    return result
}
