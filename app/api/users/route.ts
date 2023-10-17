import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions";
import { NextResponse } from "next/server";

export const GET = async (req: Request)=>{

    try {
        await connectToDb();
        const users = await prisma.user.findMany({include:{tweets:true,_count:true}});
        return NextResponse.json({users},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }

}; 