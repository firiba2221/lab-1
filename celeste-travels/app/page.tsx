import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Celeste Travels
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to Celeste Travels. Explore destinations around the globe with seamlessly integrated Material UI components.
        </Typography>
        <Button variant="contained" color="primary" startIcon={<FlightTakeoffIcon />}>
          Explore Destinations
        </Button>
      </Stack>
    </Container>
  );
}



