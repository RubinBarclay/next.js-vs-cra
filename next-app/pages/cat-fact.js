function CatFact({ fact }) {
  return (
    <p>{fact}</p>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get a dog fact
  const res = await fetch('https://meowfacts.herokuapp.com/?id=1')
  const data = await res.json()

  // By returning { props: { facts } }, the CatFact component
  // will receive `facts` as a prop at build time
  return {
    props: {
      fact: data.data[0]
    },
  }
}

export default CatFact
