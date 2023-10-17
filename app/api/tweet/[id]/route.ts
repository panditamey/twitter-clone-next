import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions"
import { NextResponse } from "next/server";

export const GET = async (req:Request,{params}:{params:{id:string}})=>{
    try {
        await connectToDb();
        const tweet = await prisma.tweets.findFirst({where:{id:params.id},include:{comments:true,_count:true}});
        await prisma.tweets.update({
            data:{views:tweet?.views?tweet.views+1:1},
            where:{id:params.id}
        })
        return NextResponse.json({tweet},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const PUT = async (req:Request,{params}:{params:{id:string}})=>{
    try {
        await connectToDb();
        const {tweet} = await req.json();
        const updatedTweetRef = await prisma.tweets.update({
            data:{tweet},
            where:{id:params.id},
        });
        return NextResponse.json({updatedTweetRef},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const DELETE = async (req:Request,{params}:{params:{id:string}})=>{
    try {
        await connectToDb();
        const updatedTweetRef = await prisma.tweets.delete({
            where:{id:params.id},
        });
        return NextResponse.json({updatedTweetRef},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}