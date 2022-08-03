router.get('/getAllPage', async(req, res)=>{
    try {
        let {page, size} = req.query;
        if(!page){
            page = 1;
        }
         
        if(!size){
            size = 4;
        }

        const limit = parseInt(size)
        const skip = (page - 1) * size;

        const data = await product.find().limit(limit).skip(skip);
        // console.log("data", data)
        if(data.length){
        // return res.status(200).json({'status':'success', 'message':'Data added', 'result': data})  
          return res.send({page, size, "result":data})
        }else{
            return res.status(400).json({'status':'failed', 'message':'data not faound'})
        }
    } catch (error) {
        return res.status(404).json({'status':'error found', 'message':error.message})
    }
})