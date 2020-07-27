import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import React from "react";
import { AppCard } from "../components/AppCard";
import { LogoutButton } from "../components/LogoutButton";
import { NavigationButton } from "../components/NavigationButton";
import { StoreGridList } from "../partials/StoreGridList";
import UserService from "../services/user-service";

interface Tile {
  name: string;
  price: any;
}
export const StorePage = () => {
  const handleShopping = async () => {
    try {
      const items = await UserService.getStoreItems();
      return items;
    } catch (err) {
      alert("Unable to load items");
    }
  };
  handleShopping();
  return (
    <>
      <div className="container">
        <Container maxWidth="xs" data-testid="store-container">
          <AppCard>
            <CardHeader title="Welcome to Guilt-Free Shopping" />
            <StoreGridList />
          </AppCard>
          <NavigationButton
            data-testid="store-shopping-button"
            text="Start Shopping"
            onClick={async (e: any) => {
              await handleShopping();
            }}
          />
          <LogoutButton data-testid="store-logout-button" />
        </Container>
      </div>
    </>
  );
};
