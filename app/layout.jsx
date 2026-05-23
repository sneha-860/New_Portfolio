import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sneha-860.github.io"),
  title: "Sneha Kalra | Java Backend Engineer",
  description:
    "Sneha Kalra is a Java Backend Engineer building distributed systems at scale with Spring Boot, microservices, cloud infrastructure, and AI-integrated platforms.",
  openGraph: {
    title: "Sneha Kalra | Java Backend Engineer",
    description:
      "Java Backend Engineer building distributed systems at scale with Spring Boot, microservices, cloud infrastructure, and AI-integrated platforms.",
    type: "website",
    url: "https://sneha-860.github.io/",
    images: ["/assets/profilemicro.jpg"]
  },
  twitter: {
    card: "summary",
    images: ["/assets/profilemicro.jpg"]
  }
};

export const viewport = {
  themeColor: "#07090d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
