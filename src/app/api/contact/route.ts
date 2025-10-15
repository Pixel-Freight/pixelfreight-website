import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, phone, subject, message } = data;

        const content = [
            `📩 **New Contact Form Submission**`,
            `**Name:** ${name}`,
            `**Phone:** ${phone}`,
            `**Subject:** ${subject}`,
            `**Message:**`,
            `${message}`
        ].join("\n");

        await fetch(process.env.DISCORD_WEBHOOK_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending Discord message:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
