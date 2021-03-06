import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});

const root = {
  friend: () => {
    return {
      id: 28931238,
      firstName: "Lamerial",
      lastName: "Qian",
      gender: "Male",
      language: "Chinese",
      email: "dasd@gmail.com"
    };
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
