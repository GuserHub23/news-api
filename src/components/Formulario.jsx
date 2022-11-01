import { FormControl, InputLabel, Select, MenuItem, ImageListItem } from '@mui/material'

import useNoticias from '../hooks/useNoticias'

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

    const { categoria, handleChangeCategoria, paisesOrdenados, handleChangePais, pais } = useNoticias()

    return (
        <form>
            <FormControl fullWidth sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
            }}>
                <InputLabel sx={{color: '#000', fontWeight: 700}}>Categoría</InputLabel>
                <Select
                    label="Categoría"
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem 
                            key={categoria.value}
                            value={categoria.value}
                        >
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>

            <FormControl fullWidth  sx={{
                marginTop: '1rem',
                backgroundColor: '#fff',
                borderRadius: '5px'
            }}>
                <InputLabel sx={{color: '#000', fontWeight: 700}}>País</InputLabel>
                <Select
                    label="Pais"
                    onChange={handleChangePais}
                    value={pais}
                >
                    {paisesOrdenados.map(pais => (
                        <MenuItem 
                            key={pais.name.common}
                            value={pais.cca2}
                            sx={{ justifyContent: 'space-between' }}
                        >
                            {pais.name.common}
                            <ImageListItem sx={{ width: 30, height: 30 }}>
                                <img src={pais.flags.svg} alt={`imagen de ${pais.name.common}`} />
                            </ImageListItem>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario
