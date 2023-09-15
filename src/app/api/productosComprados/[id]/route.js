import { getProductoCompradoById } from "@/api_services/compraService";
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    
    try {
        const products = await getProductoCompradoById(params.id);
        return NextResponse.json({
            message: "data retrieved successfully",
            status: 200,
            data: products
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}