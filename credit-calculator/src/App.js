import * as React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "./logo.png";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        LOANMETRI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function App() {
  const [job, setJob] = React.useState("");

  const handleChange = (event) => {
    setJob(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <img
            style={{ width: 240, height: 60 }}
            src={logo}
            className="logo"
            alt="logo"
          />
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          elevation={3}
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            style={{ margin: 10 }}
            component="h1"
            variant="h4"
            align="center"
          >
            Home Loan Credit Calculator
          </Typography>
          <Divider variant="middle" />
          <div className="main" style={{ margin: 40 }}>
            <Typography component="h3" variant="subtitle1">
              CUSTOMER INFO
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="job-select-label">Job</InputLabel>
                  <Select
                    labelId="job-select-label"
                    id="job-select"
                    value={job}
                    label="Job"
                    autoWidth
                    onChange={handleChange}
                  >
                    <MenuItem value={"Sales"}>Sales</MenuItem>
                    <MenuItem value={"Mgr"}>Manager</MenuItem>
                    <MenuItem value={"Self"}>Self</MenuItem>
                    <MenuItem value={"ProfExe"}>Professor/Executive</MenuItem>
                    <MenuItem value={"Office"}>Office Staff</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="LOAN"
                  name="Loan"
                  label="Amount of the loan request"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="DEROG"
                  name="DEROG"
                  label="Number of major derogatory reports"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="DELINQ"
                  name="DELINQ"
                  label="Number of delinquent credit lines"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="CLAGE"
                  name="CLAGE"
                  label="Age of oldest trade line in months"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="NINQ"
                  name="NINQ"
                  label="Number of recent credit lines"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="CLNO"
                  name="CLNO"
                  label="Number of credit lines"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="DEBTINC"
                  name="DEBTINC"
                  label="Debt-to-income ratio"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" align="center">
                  Calculate customer credit score!
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
