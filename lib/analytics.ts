import mixpanel from "mixpanel-browser";

function getMixpanelToken(): string | undefined {
  return process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_MIXPANEL_TOKEN
    : process.env.NEXT_PUBLIC_TEST_MIXPANEL_TOKEN;
}

export function analyticsInit() {
  const MIXPANEL_TOKEN = getMixpanelToken();
  if (MIXPANEL_TOKEN) {
    try {
      mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV !== "production",
        verbose: true,
        track_pageview: true,
      });
      console.log("Mixpanel initialized at:", process.env.NODE_ENV);
    } catch (error) {
      console.error("Error during Mixpanel init:", error);
    }
  } else {
    console.error("Mixpanel Token Not Found");
  }
}

export function trackEvent(eventName: string, properties?: any) {
  try {
    mixpanel.track(eventName, properties);
  } catch (error) {
    console.error("Error tracking event:", error);
  }
}
