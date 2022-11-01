export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/docs/get-started",
      permanent: true,
    },
  }
}

const Wildcard = () => {
  return <p>Wildcard</p>
}

export default Wildcard
