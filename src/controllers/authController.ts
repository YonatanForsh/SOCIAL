import exp, { Router, Request, Response } from "express"


const router: Router= exp.Router()

router.post("/login", async (req: Request, res: Response): Promise<void> => {
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


router.post("/logout", async (req: Request, res: Response): Promise<void> => {
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