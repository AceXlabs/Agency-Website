import Mixpanel from "mixpanel";
import { NextResponse } from "next/server";
import axios from "axios";
const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN;

const mp = Mixpanel.init("YOUR_PROJECT_TOKEN", {
  debug: true,
  verbose: true,
});

interface TrackEventRequest {
  event: string;
  properties: Record<string, any>;
}

export async function POST(req: Request) {
  try {
    const { event, properties }: TrackEventRequest = await req.json();

    const data = {
      event,
      properties: {
        ...properties,
        token: MIXPANEL_TOKEN,
      },
    };

    await axios.post("https://api.mixpanel.com/track", {
      data: Buffer.from(JSON.stringify(data)).toString("base64"),
    });

    return NextResponse.json(
      { message: "Event tracked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error tracking event:", error);
    return NextResponse.json(
      { message: "Error tracking event" },
      { status: 500 }
    );
  }
}
