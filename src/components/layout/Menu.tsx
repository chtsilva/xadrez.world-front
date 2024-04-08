import { Paper, Typography, styled } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import Link from 'next/link'


export const MenuContainer = () => {
  return (
    <Grid container justifyContent="center" sx={{ flexGrow: 1 }}>
      <MenuItem text="Pagina principal" linkTo="/" />
      <MenuItem text="Partidas" linkTo="/match" />
      <MenuItem text="Forum" linkTo="/" />
      <MenuItem text="Pagina segundaria" linkTo="/" />
      <MenuItem text="Pagina terceira" linkTo="/" />
      <MenuItem text="Pagina fake" linkTo="/" />
    </Grid>
  )
}

interface IMenuItem {
  text: string;
  linkTo: string;
}

const MenuItem = ({ text, linkTo }: IMenuItem) => {
  return (
    <Grid container padding={1} sx={{ cursor: "pointer" }} justifyContent="center" alignItems="center">
      <Grid >
        <Item >
          <Link href={linkTo}>
            <Typography>{text}</Typography>
          </Link>
        </Item>
      </Grid>
    </Grid>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  padding: ".5rem",
  background: theme.palette.primary.main,
  lineHeight: '60px',
  ":hover": {
    filter: "brightness(1.3)",
  }
}));
