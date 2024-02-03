"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity `)
  const data = await response.json();
  
  return data.map((item: AnimeProp, index: number) => {
    return (<AnimeCard key={item.id} anime={item} index={index} />)
  })
}

//Server Actions 


/*
Para usar server actions você precisa colocar no topo do arquivo uma descrição "use server", e usar dessa forma que está acima ou pode fazer qualquer tipo de requisição HTTP

//outro exemplo caso deseja-se retornar o Array


export async function AnimeFetch(page: number) {
  const response =  await fetch("https://shikimori.one/api/animes?...")
  const data = await response.json()
  return data
}

*/
