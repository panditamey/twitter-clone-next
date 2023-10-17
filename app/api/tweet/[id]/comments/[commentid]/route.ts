import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions"
import { NextResponse } from "next/server";

export const GET = async (req:Request,{params}:{params:{id:string,commentid:string}})=>{
    try {
        await connectToDb();
        const comment = await prisma.comments.findMany({where:{id:params.commentid}});
        return NextResponse.json({comment},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const DELETE = async (req:Request,{params}:{params:{id:string,commentid:string}})=>{
    try {
        await connectToDb();
        const comment = await prisma.comments.delete({where:{id:params.commentid}});
        return NextResponse.json({comment},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const PUT = async (req:Request,{params}:{params:{id:string,commentid:string}})=>{
    try {
        const {comment} = await req.json();
        await connectToDb();
        const commentref = await prisma.comments.update({data:{comment:comment},where:{id:params.commentid}});
        return NextResponse.json({commentref},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}