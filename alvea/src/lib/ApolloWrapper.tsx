'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm6iot3r300cj08uzc63ppca3/master',
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}