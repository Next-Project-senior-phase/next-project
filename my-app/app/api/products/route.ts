import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export const config = {
  api: {
    bodyParser: true,
  },
};


export async function postHandler(request: NextApiRequest) {
  try {
    const body = request.body;

    console.log('Request body:', body);

    if (
      !body ||
      !body.name ||
      !body.category ||
      body.status === undefined ||
      body.price === undefined ||
      !Array.isArray(body.imageUrls)
    ) {
      return NextResponse.json(
        { message: 'Error creating product', error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, ratings, description, category, status, price, imageUrls } = body;

    const newProduct = await prisma.product.create({
      data: {
        name,
        ratings,
        description,
        category,
        status,
        price,
        images: {
          create: imageUrls.map((url: string) => ({ url })),
        },
      },
    });

    return NextResponse.json(newProduct);
  } catch (err: any) {
    console.error('Error:', err);
    return NextResponse.json(
      { message: 'Error creating product', error: err.message },
      { status: 500 }
    );
  }
}

// GET method handler
export async function GET(request: NextApiRequest) {
  try {
    const products = await prisma.product.findMany({ include: { images: true } });
    return NextResponse.json(products);
  } catch (err: any) {
    console.error('Error:', err);
    return NextResponse.json(
      { message: 'Error fetching products', error: err.message },
      { status: 500 }
    );
  }
}




