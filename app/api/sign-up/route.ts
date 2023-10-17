import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"



export const POST = async (req: Request)=>{
    try {
        const {name ,email , password } = await req.json();
        if(!name || !email ||!password){
            return  NextResponse.json({error:"Invalid Data"},{status:422});
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        await connectToDb();
        const existinguser = await prisma.user.findFirst({where:{email}});
        if(existinguser){
            return NextResponse.json({error:"User Already Registered, Login in"},{status:403});
        }
        const user = await prisma.user.create({
            data:{name,email,password: hashedPassword},
        });
        return NextResponse.json({user},{status:201});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }

}; 