
 export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=N5c884Vu1NBT6KU2SFokJp2yQMOY9OL0`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // console.log(gifs);
    return gifs;
    // el gifs esta retornando un async que se trabaja mediante una promesa 
}