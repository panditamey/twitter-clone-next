import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions"
import { NextResponse } from "next/server";

export const GET = async (req:Request,{params}:{params:{id:string}})=>{
    try {
        await connectToDb();
        const tweets = await prisma.tweets.update({data:{likes:{increment:1}},where:{id:params.id}});
        return NextResponse.json({tweets},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}