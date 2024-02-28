import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardComponent({ card }) {
  console.log(card);
  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea>
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar />
    </Card>
  );
}
