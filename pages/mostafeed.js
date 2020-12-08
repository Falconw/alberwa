import Head from 'next/head'
import styles from '../styles/Home.module.css'




export default function Mostafeed( { mostafeedKeys, mostafeedValues } ) {

    return (
      <div>

        <div>{
          mostafeedValues.map(elem => <p>{elem}</p>)
        }</div>
        
        <div>{
          mostafeedKeys.map(elem => <p>{elem}</p>)
        }</div>

      </div>
    )


    return (
      <div className={styles.container}>

        <main className={styles.main}>
          { mostafeedInfoJson }
        </main>

      </div>
    )

}


export async function getStaticProps(ctx) {

  const mostafeedInfo = await fetch('https://www.alber.org.sa/nizam/api/mostafeed/1012762967')
    .then(res => res.json());
  const mostafeedValues = Object.values(mostafeedInfo);
  const mostafeedKeys = Object.keys(mostafeedInfo);
  

  return {
    props: {
      mostafeedKeys,
      mostafeedValues
    },
    revalidate: 43200,
  }

}

// Mostafeed.getInitialProps = async () => {
//   const mostafeedInfo = await fetch('https://www.alber.org.sa/nizam/api/mostafeed/1012762967')
//     .then(response => response.json())
//     // .then(data => data);
//   //console.log(mostafeedInfo)
//   return (mostafeedInfo)
// }