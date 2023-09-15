import { createCompra, getCompras} from "@/api_services/compraService";
import { NextResponse } from "next/server"

export async function POST(request) {
    const compra = await request.json();
    // console.log(compra);
    try {
        await createCompra(compra);
        return NextResponse.json({
            message: "compra inserted successfully",
            status: 200,
        });
    
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}


export async function GET() {
    
    try {
        const compra = await getCompras();
        return NextResponse.json({
            message: "data retrieved successfully",
            status: 200,
            data: compra
        });
        
    } catch (error) {
        return NextResponse.json({
            message: "server error",
            status: 500,
            error
        })
    }

}