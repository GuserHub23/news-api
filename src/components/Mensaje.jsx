import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Mensaje = ({children, severidad}) => {
    return (
        <Stack sx={{ alignContent: 'center', justifyContent: 'center' }}>
            <Alert severity={severidad}>{children}</Alert>
        </Stack>
    )
}

export default Mensaje
