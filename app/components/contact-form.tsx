import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.primary.main,
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "primary.main",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },
  },
}));

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formDataEncoded = new FormData(form);

    await fetch("/", {
      method: "POST",
      body: formDataEncoded,
    });

    setOpen(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Box
        component="form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
      >
        {/* Netlify hidden inputs */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <StyledTextField
          label="Your Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <StyledTextField
          label="Your Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <StyledTextField
          label="Your Message"
          name="message"
          multiline
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message="Message sent successfully!"
      />
    </>
  );
}
