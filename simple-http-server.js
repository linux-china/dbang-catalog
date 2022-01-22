import {serve} from "https://deno.land/std@0.122.0/http/server.ts";

const httpHandler = (req) => new Response("Hello World\n");

serve(httpHandler, {hostname: "localhost", port: 8000});

console.log("Server running on http://localhost:8000");
