export const metadata = {
  title: '{{.ProjectName}}',
  description: 'description',
}

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
