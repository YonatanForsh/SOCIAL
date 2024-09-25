import { v4 } from "uuid"

class User {
    public id: string
    public followers: string[] = []
    public following: string[] =[]
    public isLockedAccount: boolean = false
    constructor(
        public userName: string,
        public password: string,
        public email: string,
        public birthday: Date,
        public avatar: string
    ) {
        this.id = v4()
    }
}

export default User
