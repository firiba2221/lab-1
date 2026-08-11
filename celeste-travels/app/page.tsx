import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";
import { platformData } from "@/data/platform";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        position: "relative",
        py: 6,
      }}
    >
      {/* Dark mode toggle — top right corner */}
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <DarkModeToggle />
      </Box>

      <Container maxWidth="sm">
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
          {/* Logo Component */}
          <Logo size="large" variant="vertical" iconSize={72} fontSize="2.5rem" />

          {/* Version Chip */}
          <Chip
            label={`Version ${platformData.version}`}
            color="primary"
            variant="outlined"
            size="small"
            sx={{ fontWeight: 600, letterSpacing: "0.04em", px: 1 }}
          />

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 460, mx: "auto", mt: 1 }}>
            Explore destinations, manage itineraries, and experience seamless travel powered by Material UI &amp; Next.js.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
