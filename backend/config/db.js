import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://bruce:33858627@bruce.yy3td.mongodb.net/food-del')).then(()=>console.log("DB Connected"));
}