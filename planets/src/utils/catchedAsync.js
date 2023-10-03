// module.exports = (fn)=>(req,res,next)=>fn(req,res).catch((err)=>next(err));

module.exports=(fn)=>{
    return function (req, res){
        fn(req, res).catch((err)=> next(err))
    }
} 