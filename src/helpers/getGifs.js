

// funcion async resuelve UNA PROMESA que retorna los gifs
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(gif => ({id: gif.id, title: gif.title, url: gif.images.downsized_medium.url}))
    return gifs;
}