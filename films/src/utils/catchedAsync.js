// module.exports = (fn)=>(req,res,next)=>fn(req,res).catch((err)=>next(err));

module.exports=(fn)=>{
    return function (req, res, next){
        fn(req, res).catch((err)=> next(err))
    }
} 
// funciones de orden superior, reciben una función y la mejoran. mejora al controlador de errores