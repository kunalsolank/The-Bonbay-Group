import { toast } from "sonner";

export default async function submitContactForm(payload) {
  // Use the same-origin proxy to avoid CORS issues.
  // Both Vercel (vercel.json rewrites) and Vite dev server (proxy config)
  // forward /api/* → https://coral-app-sztfq.ondigitalocean.app/v1/*
  const endpoint = "/api/contact-us/submit";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data = {};

    data = await response.json();


    if (!response.ok) {
      const message =
        data?.message ||
        data?.error ||
        `Request failed with status ${response.status}`;

      console.error("Submit failed:", {
        status: response.status,
        message,
        data,
      });

      toast.error(message);

      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error("Contact form error:", error);

    // Don't show a second toast for errors already handled above
    if (!error?.message?.startsWith("Request failed with status")) {
      toast.error(
        "Failed to submit the form. Please try again."
      );
    }

    throw error;
  }
}