import mongoose,{Document, Schema, Types} from 'mongoose'

export interface IUsers extends Document<Types.ObjectId> {
    name: string,
    email: string,
    password: string

}

const UserSchema =new Schema<IUsers>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const UserModel =mongoose.model<IUsers>("User",UserSchema)

export default UserModel