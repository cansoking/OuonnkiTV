"use client";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useColorScheme } from "@mui/material/styles";

export default function Page() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <>
      <header>
        <h1>Ouonnki TV</h1>
      </header>
      <main>
        <div>
          <Button variant="contained" color="primary">
            Button
          </Button>
        </div>
        <div>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
              minHeight: "56px",
            }}
          >
            <FormControl>
              <FormLabel id="demo-theme-toggle">Theme</FormLabel>
              <RadioGroup
                aria-labelledby="demo-theme-toggle"
                name="theme-toggle"
                row
                value={mode}
                onChange={(event) =>
                  setMode(event.target.value as "system" | "light" | "dark")
                }
              >
                <FormControlLabel
                  value="system"
                  control={<Radio />}
                  label="System"
                />
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}
