import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (context) => {
context.response.body = { message: "Hello, Rishijeet!" };
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000;
console.log(`Server running on http://localhost:${PORT}`);
await app.listen({ port: PORT });