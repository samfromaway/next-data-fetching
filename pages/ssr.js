// server side rendering

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
  const res = await fetch('https://5ffa0b9387478d0017d9a44f.mockapi.io/name');
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
