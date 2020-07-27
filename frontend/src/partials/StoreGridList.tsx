import CardHeader from "@material-ui/core/CardHeader";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  cardHeader: {},
}));

interface Tile {
  name: string;
  price: any;
}

/*
  Mocks were used for rendering during demo due to a bit of flickering.
  Item results currently printed to web console to demonstrate that the
  API call is working alongside JWT authentication.
  https://i.imgur.com/Qwq1nRh.png
*/
const tileData = [
  {
    name: "Shoe One",
    price: "12.99",
    img: "https://i.imgur.com/vbEUrPg.jpg",
  },
  {
    name: "Shoe Two",
    price: "55.99",
    img: "https://i.imgur.com/vbEUrPg.jpg",
  },
  {
    name: "Shoe Three",
    price: "9.99",
    img: "https://i.imgur.com/vbEUrPg.jpg",
  },
  {
    name: "Shoe Four",
    price: "14.99",
    img: "https://i.imgur.com/vbEUrPg.jpg",
  },
];

export const StoreGridList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        data-testid="store-grid"
        cellHeight={160}
        className={classes.gridList}
        cols={2}
      >
        {tileData.map((tile) => (
          <GridListTile data-testid="store-item" key={tile.img} cols={1}>
            <CardHeader
              title={`${tile.name} $${tile.price}`}
              className={classes.cardHeader}
            />
            <img src={"https://i.imgur.com/vbEUrPg.jpg"} alt={"item"} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
