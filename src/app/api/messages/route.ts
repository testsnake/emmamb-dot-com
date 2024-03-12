import dotenv from 'dotenv';

dotenv.config();

const apiKey: string = process.env.PUBLIC_ACCESS_KEY || 'NO_API_KEY';

export const dynamic = 'force-dynamic';
const messageRequestSchema = {
    type: 'object',
    properties: {
        message: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        key: {
            type: 'string'
        }
    },
    required: ['message', 'email', 'name']
};

const responses = {
    ok: {
        description: 'Message sent',
        action: true
    },
    error: {
        description: 'Error sending message',
        action: false
    },
    missing: {
        description: 'Missing required fields',
        action: false
    },
    toolong: {
        description: 'Message too long',
        action: false
    }
};

export async function POST(request: Request) {
    try {
        const { message, email, name } = await request.json();
        if (!message || !email || !name) {
            return new Response(JSON.stringify(responses.missing), { status: 400 });
        }
        if (message.length > 1000) {
            return new Response(JSON.stringify(responses.toolong), { status: 400 });
        }

        // Verify key once implemented

        const subject = `New message from ${name} via form`;

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_key: apiKey,
                name,
                email,
                message,
                subject: subject,
                replyto: email
            })
        });

        if (response.ok) {
            return new Response(JSON.stringify(responses.ok), { status: 200 });
        } else {
            return new Response(JSON.stringify(responses.error), { status: 500 });
        }
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify(responses.error), { status: 500 });
    }
}

export async function GET(request: Request) {
    let url = new URL(request.url);
    url.pathname = '/';
    return Response.redirect(url.toString(), 301);
}
