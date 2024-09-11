import type { MetaFunction } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';
import type { loader as apiLoader } from '~/routes/api';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const fetcher = useFetcher<typeof apiLoader>();

  const data = fetcher.data;
  if (data) {
    return (
      <>
        <h1>{data.message}</h1>
        <p>{data.error}</p>
      </>
    );
  }
  return <></>;
}
