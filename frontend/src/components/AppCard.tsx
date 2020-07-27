import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface CardProps {}
const useStyles = makeStyles({
  card: { minWidth: 300 },
});

export const AppCard = ({ children }: React.PropsWithChildren<CardProps>) => {
  const classes = useStyles();

  return <Card className={classes.card}> {children} </Card>;
};
