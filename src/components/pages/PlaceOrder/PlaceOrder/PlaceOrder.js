import React from "react";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const { id } = useParams();
  return (
    <div style={{ marginTop: "60px" }}>
      <h2>{id}</h2>
      <h1>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe possimus
        ducimus vel voluptas nulla quis illum quibusdam. Veniam, accusantium
        voluptatibus. Possimus consectetur amet incidunt officiis ullam quidem
        ipsum voluptas omnis. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Modi eius excepturi qui optio necessitatibus quisquam
        error odit temporibus provident nam illo nulla, vel accusamus blanditiis
        consequuntur cupiditate, totam molestias tenetur.
      </h1>
    </div>
  );
};

export default PlaceOrder;
