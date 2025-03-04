'use client'

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'https://bukcsidqutyjcpdhscyb.supabase.co/graphql/v1',
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1a2NzaWRxdXR5amNwZGhzY3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMzc5ODEsImV4cCI6MjA1MzgxMzk4MX0.YhVNzEZNNIpVOp3BiB3CC35Mn0Via4mZsmuJXRpNens',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1a2NzaWRxdXR5amNwZGhzY3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMzc5ODEsImV4cCI6MjA1MzgxMzk4MX0.YhVNzEZNNIpVOp3BiB3CC35Mn0Via4mZsmuJXRpNens'
  },
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;