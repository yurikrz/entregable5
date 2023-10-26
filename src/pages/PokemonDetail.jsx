import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import HeaderPokeball from "../components/layouts/HeaderPokeball"
import { bgByType, colorByType } from "../constants/pokemon"
import SectionTitle from "../components/layouts/SectionTitle"

const PokemonDetail = () => {
    const {pokemonId} = useParams()
    const [pokemon, setPokemon]  = useState(null)
    const MAX_STAT_VALUE = 150
    const bgColor = bgByType[pokemon?.types[0].type.name]
    

    const getPercentStat = (statValue)=>{
        const percentStat = (statValue * 100 / MAX_STAT_VALUE).toFixed(1)
        return `${percentStat}%`
    }

    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(({data})=> setPokemon(data))
            .catch((err)=> console.log(err))
    },[])

    return (
    <main className="text-center capitalize ">
        <HeaderPokeball/>

        <article className="max-w-[1100px] mx-auto px-4 mt-[150px] ">
            <div className={`h-[150px] w-full ${bgColor} relative`}>
                <div className="absolute h-[250px] w-[250px] left-1/2 -translate-x-1/2 top-[-80%]">
                    <img className={pokemon?.sprites.other["official-artwork"].front_default ? '' : 'w-full h-full object-scale-down object-center'} src={pokemon?.sprites.other["official-artwork"].front_default ? pokemon?.sprites.other["official-artwork"].front_default : '/images/no-pokemon-image.png'} alt="" />
                </div>
            </div>

            <h3 className="mt-10 text-4xl font-medium font-[Roboto]">#{pokemon?.id}</h3>
            <h2 className="mt-4 text-4xl font-semibold font-[Roboto]">{pokemon?.name}</h2>
            
            <section className="grid grid-cols-[repeat(auto-fit,_80px)] justify-center gap-4 mt-2">
                <div>
                    <h3 className="font-[Roboto] text-sm font-normal text-[#0F0F2D]">Weight</h3>
                    <h3 className="font-[Roboto] text-xl font-semibold text-[#0F0F2D]">{pokemon?.weight}</h3>
                </div>
                <div>
                    <h3 className="font-[Roboto] text-sm font-normal text-[#0F0F2D]">Height</h3>
                    <h3 className="font-[Roboto] text-xl font-semibold text-[#0F0F2D]">{pokemon?.height}</h3>
                </div>
            </section>

            <section className="mt-2 grid grid-cols-2 ">
                <div>
                    <h3 className="font-[Roboto] text-2xl font-medium text-[#302F2F]">Types</h3>
                    <div className='grid grid-cols-[repeat(auto-fit,_150px)] justify-center gap-4 mt-2 '>
                        {
                            pokemon?.types.map(type => <div className='h-[40px] flex justify-center items-center rounded-sm' key={type.type.url} style={{background: colorByType[type.type.name]}}><span className="font-[Roboto] text-xl font-medium text-[#FFF]">{type.type.name}</span></div>)
                        }
                    </div>
                </div>
                <div>
                    <h3 className="font-[Roboto] text-2xl font-medium text-[#302F2F]">Abilities</h3>
                    <div className="grid grid-cols-[repeat(auto-fit,_150px)] justify-center gap-4 mt-2">
                        {
                            pokemon?.abilities.map(ability => <div className='h-[40px] border rounded-sm border-[#D3D3D3] flex justify-center items-center ' key={ability.ability.url} ><span className="font-[Roboto] text-xl font-medium text-[#302F2F]">{ability.ability.name}</span></div>)
                        }
                    </div>
                </div>
            </section>

            <section className="mt-6">
                <SectionTitle title='Stats'/>

                <ul className="grid gap-4 mt-6">
                    {
                        pokemon?.stats.map(stat => <li key={stat.stat.name} className="capitalize">
                            <div className="flex justify-between items-center">
                                <h5 className="text-[#302F2F] font-[Roboto] text-xl font-semibold">{stat.stat.name}</h5>
                                <span className="text-[#302F2F] font-[Roboto] text-xl font-semibold">{stat.base_stat}/{MAX_STAT_VALUE}</span>
                            </div>
                            <div className="bg-slate-200 h-10 rounded-md">
                                <div className="[background:_linear-gradient(90deg,_#FCD676_-2.25%,_#E6901E_133.18%)] h-full w" style={{width: getPercentStat(stat.base_stat)}}></div>
                            </div>
                        </li>)
                    }
                </ul>
            </section>

                 
            <section className="my-6">
                <SectionTitle title='Movements'/>   
            
                <ul className="flex flex-wrap justify-normal gap-4 mt-6">
                    {
                        pokemon?.moves.map(move => <li key={move.move.name} className="capitalize">
                            <div className='h-[40px] px-4 sm:h-[60px] w-auto sm:px-8 sm:py-4 flex justify-center items-center rounded-[50px] bg-[#E5E5E5] transition-all'><span className="text-base font-[Roboto] sm:text-2xl font-normal text-[#302F2F] ">{move.move.name}</span></div>
                        </li>)
                    }
                </ul>
            </section>
            <br/>
        </article>
    </main>
    )
}

export default PokemonDetail
