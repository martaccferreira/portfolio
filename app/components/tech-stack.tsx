import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function TechStack({ stack }: { stack: string[] }) {
  return (
    <Stack direction="row" spacing={1} sx={{ my: 1 }}>
      {stack.map((item) => (
        <Chip
          key={item}
          label={item}
          color="primary"
          variant="outlined"
          sx={{ m: 2, fontWeight: 500, fontSize: "1rem" }}
        />
      ))}
    </Stack>
  );
}
