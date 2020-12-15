//esto devuelve una promesa que resuelve la coleccion de mis imagenes

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=L4fCEzVLI7o5pAOdj6i3XxinCBIy1uoM`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //el ? es para preguntar que si vienen imagenes, se usa eso, sino no
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
