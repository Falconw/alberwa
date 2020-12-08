export default async function Mostafeed(req, res) {
  console.log(req);

  const mostafeedInfoRes = await fetch("https://www.alber.org.sa/nizam/api/mostafeed/1012762967")
    .then(res => res.json());

  //console.log("MOSTAFEED    " + mostafeedInfoRes);
  
  let replies = [];

  for (let i = 0; i < 18; i++) {
    replies[i] = { "message":  mostafeedInfoRes[i]}
  }

  res.statusCode = 200;
  //res.json(mostafeedInfoRes);
  res.json({ replies });
}