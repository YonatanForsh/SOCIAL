import exp, { Router, Request, Response } from "express"
import UserService from "../services/userService"

const router: Router= exp.Router()


router.post("/register", async (req: Request<any, any, NewUserDTO>, res: Response): Promise<void> => {
    try{
        const resolt = await UserService.createNewUser(req.body)  
        console.log(resolt);
        if (resolt){
            res.status(200).json({
                err: false,
                Message: "User Create!!",
                data: undefined
            })
        } else {
            throw new Error("Can't save new User");
            
        }
        } catch(err){
            res.status(400).json({
                err: true,
                Message: "Some Error"
        })
    }
})


router.post("/follow", async (req: Request, res: Response): Promise<void> => {
    try{

        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        })
    } catch(err){
        res.status(400).json({
            err: true,
            Message: "Some Error"
        })
    }
})


router.get("/search", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        })
    } catch(err){
        res.status(400).json({
            err: true,
            Message: "Some Error"
        })
    }
})


router.get("/profile", async (req: Request, res: Response): Promise<void> => {
    try{

        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        })
    } catch(err){
        res.status(400).json({
            err: true,
            Message: "Some Error"
        })
    }
})


router.get("/followers", async (req: Request, res: Response): Promise<void> => {
    try{

        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        })
    } catch(err){
        res.status(400).json({
            err: true,
            Message: "Some Error"
        })
    }
})


router.get("/following", async (req: Request, res: Response): Promise<void> => {
    try{

        res.status(200).json({
            err: false,
            Message: "Some Error",
            data: undefined
        })
    } catch(err){
        res.status(400).json({
            err: true,
            Message: "Some Error"
        })
    }
})




export default router