import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

// GET /api/blogs/[id] — get single blog
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const blog = await BlogPost.findById(id).lean();

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ blog });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}

// PUT /api/blogs/[id] — update blog
export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await req.json();

        if (body.content) {
            const wordCount = body.content.split(/\s+/).length;
            body.readTime = `${Math.ceil(wordCount / 200)} min read`;
        }

        if (body.status === 'published') {
            const existing = await BlogPost.findById(id);
            if (existing && !existing.publishedAt) {
                body.publishedAt = new Date();
            }
        }

        if (body.title) {
            body.slug = body.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        }

        const blog = await BlogPost.findByIdAndUpdate(id, body, { new: true }).lean();

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ blog });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }
}

// DELETE /api/blogs/[id] — delete blog
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const blog = await BlogPost.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}
