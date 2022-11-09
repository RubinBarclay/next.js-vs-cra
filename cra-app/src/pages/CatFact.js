import React, { useEffect, useState } from 'react'

function CatFact() {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      const res = await fetch('https://meowfacts.herokuapp.com/?id=1')
      const data = await res.json()
      setCatFact(data.data[0])
    }

    fetchCatFact()
  }, [])

  return (
    <div>{catFact}</div>
  )
}

export default CatFact