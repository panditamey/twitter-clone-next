import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions"
import { NextResponse } from "next/server";

export const GET = async (req:Request)=>{
    try {
        const {tweetId} = await req.json();
        await connectToDb();
        const comments = await prisma.comments.findMany({where:{tweetId:tweetId}});
        return NextResponse.json({comments},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const POST = async (req:Request)=>{
    try {
        const {comment,userId,tweetId} = await req.json();
        await connectToDb();
        const commentref = await prisma.comments.create({
            data:{comment:comment,userId:userId,tweetId:tweetId}
        });
        return NextResponse.json({commentref},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const PUT = async (req:Request)=>{
    try {
        const {comment,commentId} = await req.json();
        await connectToDb();
        const commentref = await prisma.comments.update({
            data:{comment:comment},
            where:{id:commentId}
        });
        return NextResponse.json({commentref},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}