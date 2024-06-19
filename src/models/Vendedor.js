import { prisma } from "../../config/prisma.js";
 
export const createSeller = async(data, departamentoId) => {
    return await prisma.seller.create({
        data:{
            name: data.name,
            email: data.email,
            passwordHash: data.passwordHash,
            token: data.token,
            phone: data.phone,
            departamento:{
                connect:{
                    id: departamentoId,
                }
            }
        },
    });
};
 
export const findSellerByEmail = async(email) => {
    return await prisma.seller.findUnique({
        where:{
            email:email,
        },
        include:{
            state:true,
        },
    });
};
 
export const findAllSellers = async() => {
    return await prisma.seller.findMany({
        include: { departamento: true},
    });
};
 
export const updateToken = async(sellerId, token) =>{
    return await prisma.seller.update({
        where: {id:sellerId},
        data:{
            token,
        }
    });
};
 
export const findSellerByTokenWithRelations = async(token) => {
    return await prisma.seller.findFirst({
        where: { token },
        include: {
            departamento: true,
        }
    });
};
 
export const findSellerByToken = async(token) => {
    return await prisma.seller.findFirst({
        where: { token },
    });
};