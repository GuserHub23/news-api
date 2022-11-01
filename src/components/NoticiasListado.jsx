
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import useNoticias from '../hooks/useNoticias'

import Noticia from './Noticia'
import Mensaje from './Mensaje'
import Paginacion from './Paginacion'

const NoticiasListado = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina, error } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography
                textAlign='center'
                marginY={5}
                variant='h3'
                component='h2'
            >
                Últimas Noticias
            </Typography>
            <Paginacion/>
            {
                error ? <Mensaje severidad='error'>ERROR DE SERVIDOR</Mensaje> :
                    totalNoticias > 0 ?
                        <Grid
                            container
                            spacing={2}
                        >
                            {
                                noticias.map(noticia => (
                                    <Noticia key={noticia.url} noticia={noticia}/>
                                ))
                            }
                        </Grid> :
                            <Mensaje severidad='warning'>NO HAY NOTICIAS SOBRE ESTE PAÍS O ESPERE A QUE CARGUEN</Mensaje>
            }
            <Paginacion/>
        </>
    )
}

export default NoticiasListado
