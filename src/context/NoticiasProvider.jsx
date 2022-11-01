import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [ noticias, setNoticias ] = useState([])
    const [ categoria, setCategoria ] = useState('general')
    
    const [ pagina, setPagina ] = useState(1)
    const [ totalNoticias, setTotalNoticias ] = useState(0)

    const [ paises, setPaises ] = useState([])
    const [ pais, setPais ] = useState('AR')

    const [ error, setError ] = useState(false)

    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
    const urlPaises = 'https://restcountries.com/v3.1/all'

    const consultarApi = async () => {
        const { data : dataPaises } = await axios(urlPaises)
        const { data } = await axios(url)
        setNoticias(data.articles)
        setTotalNoticias(data.totalResults)
        setPaises( dataPaises)
    }

    useEffect(() => {
        try {
            setPagina(1)
            consultarApi()
        } catch (error) {
            setError(true)
        }
    }, [categoria, pais])

    useEffect(() => {
        try {
            consultarApi()
        } catch (error) {
            setError(true)
        }
    }, [ pagina ])

    const paisesOrdenados = paises.sort((a, b) => {
        if (a.name.common > b.name.common) {
          return 1;
        }
        if (a.name.common < b.name.common) {
          return -1;
        }
        return 0;
    })
    
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePais = e => {
        setPais(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                paisesOrdenados,
                pais,
                setPais,
                handleChangePais,
                totalNoticias,
                handleChangePagina,
                pagina,
                error,
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider,
}

export default NoticiasContext
