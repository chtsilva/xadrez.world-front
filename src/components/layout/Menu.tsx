import { Box, Paper, Typography, styled } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

export const MenuContainer = () => {
  return (
    <MenuContainerStyled container justifyContent="center">
      <MenuItem text="Pagina principal" linkTo="" />
      <MenuItem text="Partidas" linkTo="" />
      <MenuItem text="Forum" linkTo="" />
      <MenuItem text="Pagina segundaria" linkTo="" />
      <MenuItem text="Pagina terceira" linkTo="" />
      <MenuItem text="Pagina fake" linkTo="" />
    </MenuContainerStyled>
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
          <Typography>{text}</Typography>
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

const MenuContainerStyled = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.main,
  flexGrow: 1,
}))