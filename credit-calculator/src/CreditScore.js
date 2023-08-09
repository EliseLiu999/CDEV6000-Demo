import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "LOAN",
    desc: "Amount of the loan request",
    price: "0",
  },
  {
    name: "JOB",
    desc: "Type of occupation",
    price: "10",
  },
  {
    name: "DEROG",
    desc: "Number of major derogatory reports",
    price: "0",
  },
  {
    name: "DELINQ",
    desc: "Number of delinquent credit lines",
    price: "60",
  },
  {
    name: "NINQ",
    desc: "Number of recent credit lines",
    price: "0",
  },
  {
    name: "DEBTINC",
    desc: "Debt-to-income ratio",
    price: "0",
  },
  {
    name: "Base",
    desc: "Intercept",
    price: "100",
  },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Score Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Credit Score" />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            170
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Predicted Status
          </Typography>
          <Typography variant="h3" gutterBottom>
            BAD!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
