import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import useNoticias from '../hooks/useNoticias'

const Paginacion = () => {

    const { totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <Stack
            spacing={2}
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{marginY: 7}}
        >
            <Pagination 
                count={totalPaginas} 
                variant='outlined'
                shape='rounded'
                color='primary'
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
    )
}

export default Paginacion
