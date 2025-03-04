'use client'

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm6iot3r300cj08uzc63ppca3/master',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzgzMTI3MjcsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY202aW90M3IzMDBjajA4dXpjNjNwcGNhMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTc0ZmE2MGEtNjRmZC00OTA0LWI2NGMtMDFkNzE1M2Q0MmNjIiwianRpIjoiY202a2lpbDJtMGQwbjA3bDY1eHJqY2oydyJ9.EfnT5sKWMnk8k4-9D_ur2dQ3q-TRRoZj1zdr3FVIr-QeTrdxPqw_-XnW92i43Yenkb0UwoHOfsokbB5RL___JmLJ5AGeRO_m-4zUTjp-zOqSNDxiBp7G0FDy8gQ5LlF04scbeN9QiHTs-mSKq5E7BIqR-ms4OqgMZgkA8f1Q_52WZBp4qFOTLmEp-c028r4fJSBOofcD1XMAAXlVIyY3_4089KHgYpPr0TlLhYq7hRiHn223rNEP8Xbjw5CdTQewo13PeODU9nHb1rRXJ2dJmLYlpKJ0P00PivdQmw56a5rdvz5aelMMkw8WQvcZxJMR5RiXc7TiSghcgwJdwDwJz1xEAvReVcCLJ9dkmX-NbK-QwJHYqfnBt17fnRMXH3vh-6FHwS3GdSmS9L3hjlq97BEzeg9GP3m5YBpCc_wo9R4M9-C82BF0F9DWJHInST5EOwB-NaLPJ8RRAyn_TjwWny3SyPKZbsvRjQ8GqD0n_t2OGIxG8jIawaUyOQmMHaOnlGEkfm5bdasJrzal4L22tnipK6Gzxnyb_1o9xvM49Vxrb_9_PK387wd3rXn4lb-cV-0nKMhIk6rOU1qFmlIGhT14cuRpxMDfLgumJe9DoiuC5KYu2WKO3zn7E7E9_gpWh_cJUG6Z7K9AM6eL8OCRhuiruL3IFLsR6c3O9e0Bh6c',
     },
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;