export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="container">{children}</main>;
}
