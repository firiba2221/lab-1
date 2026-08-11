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
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", bgcolor: "grey.50" }}>
      <Container maxWidth="md">
        <Stack spacing={4} sx={{ alignItems: "center", textAlign: "center" }}>
          {/* Shared Logo Component */}
          <Logo size="large" variant="vertical" iconSize={64} fontSize="2.2rem" />

          <Box>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 540, mx: "auto" }}>
              Explore destinations, manage itineraries, and experience seamless travel powered by Material UI & Next.js.
            </Typography>
          </Box>

   
        </Stack>
      </Container>
    </Box>
  );
}
