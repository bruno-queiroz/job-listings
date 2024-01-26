export const sanitizeString = (string: string) => {
    return string.toLowerCase().split(" ").join("-")
}