export default async function Mostafeed(req, res) {
  

  console.log("\n");
  const waReply = await req.body.query;
  console.log("BODY:  " + waReply);
  console.log("\n");


  // const mostafeedID = "1012762967";
  const mostafeedID = waReply.message;
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