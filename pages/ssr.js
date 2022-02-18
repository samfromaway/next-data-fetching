// server side rendering
import { YOUR_API_URL } from '../lib/api';

export default function ServerSideRendered({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(YOUR_API_URL);
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
