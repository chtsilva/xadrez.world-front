import { styled } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { MenuContainer } from "./Menu";

interface ILayout {
  children: React.ReactElement;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <Grid sx={{ width: "99vw", height: "100vh" }}>
      <Grid container sx={{ height: "20vh", backgroundColor: "#BCBCBC", maxWidth: "100vw" }} >
        {/* Header */}
      </Grid>
      <Grid container>
        {/* LOGO */}
        <MenuContainer />
        {/* LOGIN */}
      </Grid>
      <Grid sx={{ flexGrow: 1 }}>
        <ContainerChildren container justifyContent="center"  >
          <GridChildren>
            {children}
          </GridChildren>
        </ContainerChildren>
      </Grid>
    </Grid>
  )
}

const ContainerChildren = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  background: theme.palette.primary.light,
  maxWidth: "100vw",
  minHeight: "80vh",
}))

const GridChildren = styled(Grid)(({ theme }) => ({
  padding: "1rem",
  flexGrow: 1,
  background: theme.palette.primary.main,
  marginTop: "1rem",
  marginBottom: "1rem",
  maxWidth: "50vw",
}))