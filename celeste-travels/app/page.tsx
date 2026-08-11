import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "@/components/Link";
import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  buttonLabel: string;
  href: string;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
}

function ActionCard({
  icon,
  title,
  buttonLabel,
  href,
  variant = "contained",
  color = "primary",
}: ActionCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2.5,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        {icon}
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Button
          component={Link}
          href={href}
          variant={variant}
          color={color}
          fullWidth
          size="medium"
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          {buttonLabel}
        </Button>
      </Stack>
    </Paper>
  );
}

export default function Home() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", bgcolor: "background.default", position: 'relative', py: 6 }}>
      {/* Dark mode toggle — top right corner */}
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <DarkModeToggle />
      </Box>

      <Container maxWidth="md">
        <Stack spacing={4} sx={{ alignItems: "center", textAlign: "center" }}>
          <Logo size="large" variant="vertical" iconSize={64} fontSize="2.2rem" />

          <Box>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 540, mx: "auto" }}>
              Explore destinations, manage itineraries, and experience seamless travel powered by Material UI &amp; Next.js.
            </Typography>
          </Box>

          <Grid container spacing={2.5} sx={{ justifyContent: "center", maxWidth: 640, mt: 2 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ActionCard
                icon={<LoginIcon color="primary" sx={{ fontSize: 32 }} />}
                title="Login"
                buttonLabel="Go to Login"
                href="/login"
                variant="contained"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ActionCard
                icon={<PersonAddIcon color="primary" sx={{ fontSize: 32 }} />}
                title="Register"
                buttonLabel="Go to Register"
                href="/register"
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <ActionCard
                icon={<DashboardIcon color="primary" sx={{ fontSize: 32 }} />}
                title="Dashboard"
                buttonLabel="View Dashboard"
                href="/dashboard"
                variant="contained"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
