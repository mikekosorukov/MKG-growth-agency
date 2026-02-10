import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mkgproductlab.com';

export const metadata: Metadata = {
  title: "Speak with Mike",
  description: "Schedule a free consultation to discuss your go-to-market strategy and product growth needs. Pick a time that works for you.",
  openGraph: {
    title: "Speak with Mike | MKG Lab",
    url: `${baseUrl}/bookings`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak with Mike | MKG Lab",
  },
  alternates: {
    canonical: `${baseUrl}/bookings`,
  },
};

export default function BookingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

