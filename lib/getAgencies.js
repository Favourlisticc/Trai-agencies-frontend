export const getStaticProps = async () => {
    const res = await fetch('');

    if(!response.ok) {
        throw new Error('failed to fetch user')
    }
  
    return response.json()
  }