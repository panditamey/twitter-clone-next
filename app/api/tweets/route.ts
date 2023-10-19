import prisma from "@/prisma";
import { connectToDb } from "@/utils/functions"
import { NextResponse } from "next/server";

export const GET = async (req:Request)=>{
    try {
        await connectToDb();
        const tweets = await prisma.tweets.findMany({include:{comments:true,User:{select:{name:true}},_count:true}});
        return NextResponse.json({tweets},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}

export const POST = async (req:Request)=>{
    try {
        const {tweet,userId,image} = await req.json();
        var url = null;
        if(!tweet||!userId){
            return NextResponse.json({error:"Invalid Data"},{status:422});
        }
        await connectToDb();
        const user = await prisma.user.findFirst({where:{id:userId}})
        if(!user){
            return NextResponse.json({error:"Invalid User"},{status:401});
        }
        if(image){
            url = image;
        }
        const tweetref = await prisma.tweets.create({
            data:{
                tweet,
                userId,
                image:url?url:null,
                views:0,
                likes:0,
            }
        });
        return NextResponse.json({tweetref},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.nessage},{status:500});
    }finally{
        await prisma.$disconnect();
    }
}