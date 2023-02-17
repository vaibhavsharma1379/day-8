const express=require('express');
const app =express();
const getRoutes = require('./routes/getRoutes')
//  const ngrok=require('ngrok');
const PORT=3001;
//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use('/api/v1',getRoutes);

app.listen(PORT,()=>{
    console.log('server is running');
});
// (async function(){
// const  url=await ngrok.connect({
//     proto:'http',
//     addr:PORT,
//     authtoken;""

// });
// console.log(url);
// });