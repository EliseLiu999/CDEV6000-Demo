import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CustomerInfo() {
  const [job, setJob] = React.useState("");

  const handleChange = (event) => {
    setJob(event.target.value);
  };
  return (
    <React.Fragment>
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
            id="NINQ"
            name="NINQ"
            label="Number of recent credit lines"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            // error
            required
            id="DEBTINC"
            name="DEBTINC"
            label="Debt-to-income ratio"
            // helperText="Debt-to-income ratio is required."
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
