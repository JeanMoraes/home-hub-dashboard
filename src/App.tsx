import { Box, Grid } from "@mui/material";
import { HeroCard } from "./components/HeroCard/Index";
import { UsersCard } from "./components/UsersCard/Index";
import { WaterCard } from "./components/WaterCard/Index";

export default function Root() {
  return (
    <Box
			width={3 / 4}
			my={4}
			display='flex'
			alignItems='center'
			gap={4}
			p={2}
			sx={{ margin: 'auto' }}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<HeroCard />
				</Grid>
				<Grid item xs={4}>
					<UsersCard />
				</Grid>
				<Grid item xs={4}>
					<WaterCard />
				</Grid>
			</Grid>
		</Box>
  );
}
