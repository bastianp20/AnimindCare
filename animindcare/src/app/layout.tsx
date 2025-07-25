import './globals.css';

export const metadata = {
  title: 'Animind Care+',
  description: 'Plataforma veterinaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
