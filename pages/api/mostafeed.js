export default async function Mostafeed(req, res) {
  

  console.log("\n");
  const toCooki = JSON.stringify(await req.cookies);
  console.log("COOKI:  " + toCooki);
  const toQuery = JSON.stringify(await req.query);
  console.log("QUERY:  " + toQuery);
  const toBody = JSON.stringify(await req.body);
  console.log("BODY:  " + toBody);
  console.log("\n");

  // const reqreq = await req;
  // console.log("Good luck:  " + reqreq);

  const mostafeedID = "1012762967";
  const mostafeedInfoRes = await fetch(`https://www.alber.org.sa/nizam/api/mostafeed/${mostafeedID}`)
    .then(res => res.json());
  
  const reply1 =  `+ ${mostafeedInfoRes[0]}`
                + `\n + ${mostafeedInfoRes[1]}`
                + `\n + ${mostafeedInfoRes[2]}`
                + `\n + ${mostafeedInfoRes[3]}`
                + `\n + ${mostafeedInfoRes[4]}` 
                + `\n + ${mostafeedInfoRes[5]}`
  
  let replies = [{
    "message":`${reply1}`
  }];


  res.statusCode = 200;
  res.json({ replies });
}