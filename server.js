const http = require("http");

const  port = 8081;

const toDoList = ["learn", "apply things", "succed"];

http
  .createServer((req, res) => {
    const { method, url } = req;
    //console.log(method, url);
     if (url === "/todos") {
        if (method === "GET") {
         // res.writeHead(200,{ "Content-Type": "text/html" });
         // res.write(toDoList.toString());
        }else if(method==="POST") {
        } else if(method=== "DELETE"){
          let body="";
          req
          .on("error",(err)=>{
            console.log(err);
          })
          .on("data", (chunk)=>{
            body+=chunk;
           // console.log(chunk);
          })
          .on("end",()=>{
            body = JSON.parse(body);
            //add  item  to  the  exiting  
           // let newToDo=toDoList; 
           // newToDo.push(body.item);
            //  add  anotehr  method
          // newToDo.push(body.devtown);
           // console.log(newToDo);
           // console.log("data :", body);
           let deleteThisItem=body.item;
           for (let i=0; i < toDoList.length; i++) {
             if (toDoList[i]===deleteThisItem) {
               toDoList.splice(i,1);
               break;
             } else {
              console.error("Error: Match not Found!!!"); 
              break; 
            }
             }
           //  delete   another  method
          //   toDoList.find((elem,index)=> {
           //   if (elem === deleteThisItem) {
           //     toDoList.splice(index,1);
           //   } else { 
           //     console.error("Error: Match not Found!!!"); 
            //  }
              //   }) ;    
          });
        } else {
           res.writeHead(501);} 
      
      } else {
        res.writeHead(404);}
        res.end();  
    //   res.writeHead(200,
  //    { "Content-Type": "text/html" });
  //  res.write("<h2>hey server stated:-123456788 </h2");
    
    // call back func
   // const { method, url } = req;

  //  console.log(method, url);

    //if (url === "/todos") {
     // if (method === "GET") {
     // res.writeHead(200,
     //      { "Content-Type": "text/html" });
    
    
           // res.write(toDoList.toString());
     // }}  
      //else { res.writeHead(501); }
    //res.end(); 
    })
  .listen(port, ()=> {
   console.log(`Nodejs server  started running  on port: ${port}`);
  });    

//const toDoList = ["learn", "apply thins", "succed"];

//http 
 // .createServer((req, res) => {
   // const {method, url} = req;
   // //console.log(method, url);
     //if(url==="/todos"){
       //if(method==="GET") {
         // res.writeHead(200, {"Content-Type": "text/html"});
         // res.write("<h2>hey server stated:-123456 </h2");
         // res.write(toDoList.toString());
       // } }
      //else { res.writeHead(501);}}
    //  else { res.writeHead(404); }
    //res.end();
         //  }  else { res.writeHead(404); }
          //     res.end();
  //})
  //.listen(port, ()=> {
   // console.log(`Nodejs server  started running  on port: ${port}`);
 // });

   //  http 
   //  .createServer((req, res) => {
   //    res.writeHead(200,{"Content-Type": "text/html"});
   //    res.write("<h2>hey server stated:-123456 </h2");
   //    res.end();
      // call  back  func
    // })
   //  .listen(port, ()=> {
     //  console.log(`Nodejs server  started running  on port: ${port}`);
      //  });

  //const {method, url} = req;
   //console.log(method, url);
  // if(url==="/todos"){
     // if(method==="GET") {
    ///    res.writeHead(200, {"Content-Type": "text/html"});
      //  res.write(toDoList.toString());
      //} //else { res.writeHead(501);}
         //  }  else { res.writeHead(404); }
          //     res.end();
  // }else  {
  //if(url==="/") {}
 //  res.end();
 //  const {method, url} = req;
 //  //console.log(method, url);
 //  if(url==="/todos"){
   //   if(method==="GET") {
   //     res.writeHead(404);
   //     res.write(toDoList.toString());
   //   }}  
  // }else  {
  //if(url==="/") {}
   //  res///.end();

 // })
 // .listen(port, ()=> {
  //  console.log(`Nodejs server  started running  on port: ${port}`);
   //  });

    