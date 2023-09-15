import { getCompraById } from "@/api_services/compraService";
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    try {
        const product = await getCompraById(params.id);
        return NextResponse.json({
            message: "data retrieved successfully",
            status: 200,
            data: product
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "error",
            status: 500,
            error
        })
    }

}