import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { AuthenticatedUser } from './User/AuthenticatedUser';
import { setUserLogged, userStorage } from '@/data/storage/UserStorage';

export const UserMenuComponent = () => {

  const { logged } = userStorage();

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
      <Grid>
        {logged ? <AuthenticatedUser /> : <Button variant="contained" onClick={setUserLogged}>Entrar</Button>}
      </Grid>
    </Grid>
  )
}