// File: /pages/api/avatar.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

export async function GET(request: Request) {
    const gravatarUrl = 'https://www.gravatar.com/avatar/92f6c8e968dc5df2da9ed84cdfacb078';
    const publicDir = path.resolve('./public');
    const maskPath = path.join(publicDir, 'circle-mask.png');
    const iconPath = path.join(publicDir, 'icon.png');
    const icon2Path = path.join(publicDir, 'icon2.png');
    const faviconPath = path.join(publicDir, 'favicon.ico');

    try {
        const response = await fetch(gravatarUrl);
        if (!response.ok) throw new Error(`Failed to fetch Gravatar image: ${response.statusText}`);
        const imageBuffer = await response.arrayBuffer();
        const maskBuffer = await sharp(maskPath).resize(80, 80).toBuffer();
        console.log('Image fetched successfully');

        // Circular crop + png
        const circularBuffer = await sharp(Buffer.from(imageBuffer))
            .resize(80, 80)
            .composite([
                {
                    input: maskBuffer,
                    blend: 'dest-in'
                }
            ])
            .png()
            .toBuffer();

        await sharp(circularBuffer).toFile(iconPath);

        console.log('Image processed successfully');

        await sharp(Buffer.from(imageBuffer)).resize(80, 80).png().toFile(icon2Path);

        console.log('Image processed successfully');

        // Convert png to ico
        pngToIco(iconPath)
            .then((buf) => {
                fs.writeFileSync(faviconPath, buf);
            })
            .catch((err) => {
                console.error('Error converting png to ico:', err);
            });

        console.log('Image processed successfully');

        return new Response('Images processed successfully', { status: 200 });
    } catch (error) {
        console.error('Error processing images:', error);
        return new Response('Error processing images', { status: 500 });
    }
}
