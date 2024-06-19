import { prisma } from "../../config/prisma.js";
 
export const createDepartament = async(data) => {
    return await prisma.departament.create({
        data:{
            name: data.name,
            employers: data.employers,
            area: data.area,
        },
    });
};
 
export const findDepartamentByName = async(name) => {
    return await prisma.departament.findUnique({
        where:{
            name:name,
        },
    });
};
 
export const findAllDepartament = async() => {
    return await prisma.departament.findMany({

    });
};
 
