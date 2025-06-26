import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../data/schema.js";
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is running!");
});

const root = { hello: () => "Hi, I'm Manny!" };

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
