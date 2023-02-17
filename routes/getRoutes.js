const  express=require('express');
const routes=express.Router();
const main=require('../scrapeFn/scrape');

const path = require('path');
routes.post('/indeed',async (req,res)=>{
    try{
        let skill=req.body.skill;
        let scrp=await main(skill);
        return res.status(200).json({
            status:"ok",
            list: scrp?.list||{}
        })
    }
    catch(e){
        return res.status(500).send(e);
    }
})
routes.get('/getData',async(req,res)=>{
    try{
        const jobs=path.join(__dirname,'..','job.json');
        return res.status(200).sendFile(jobs);
    }
    catch(e){
        return res.status(500).send(e);
    }
});

module.exports=routes;