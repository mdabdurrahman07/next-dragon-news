import CategoriesAll from "@/components/UI/CategoriesAll/CategoriesAll";
import { Box, Container, Grid } from "@mui/material";

export const metadata = {
  title: "Dragon News Categories",
  description: "Select Your Categories",
};

const layout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoriesAll />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default layout;
