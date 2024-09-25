import fs from "fs/promises"
import User from "../models/user"
import { getFileData, saveFileData } from "../config/fileDataLayer"


export default class UserService{
    public static async createNewUser(newUser: NewUserDTO): Promise<boolean>{
        const { userName, password, email, birthday, avatar } = newUser
        const user: User = new User(
            userName, password, email, birthday, avatar 
        )
        let users: User[] = await getFileData<User>("users") as User[]
        if (!users) users = []

        users.push(user)

        return await saveFileData("users", users)
    }
}

