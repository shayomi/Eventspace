import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckOut = async () => {
    console.log("CHECKOUT");
  };
  return (
    <form action={onCheckOut}>
      <Button>{event.isFree ? "Get Ticket" : "Buy Ticket"}</Button>
    </form>
  );
};

export default Checkout;
