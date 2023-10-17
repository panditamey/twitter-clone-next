import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"



export const POST = async (req: Request)=>{
    try {
        const {email , password } = await req.json();
        if(!email ||!password){
            return  NextResponse.json({error:"Invalid Data"},{status:422});
        }
        await connectToDb();
        const user = await prisma.user.findFirst({where:{email}});
        if(!user){
            return NextResponse.json({error:"User Not Registered, Login in First"},{status:401});
        }
        const isPasswordMatched = await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return NextResponse.json({error:"Login Failed!!"},{status:403});
        }
        
        return NextResponse.json({user,"message":"Logged in Successfully!"},{status:201});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }

}; 