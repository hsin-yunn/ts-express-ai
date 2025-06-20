import type { Request,Response, NextFunction } from 'express';
import { MiddlewareFun } from '../types/middlewareFun';

const handleErrorAsync = (fun:MiddlewareFun)=>{
  return function(req:Request,res:Response,next:NextFunction){
    return fun(req,res,next).catch((err:Error)=>next(err));
  };
}

export default handleErrorAsync