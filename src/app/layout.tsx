import Header from './header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{ margin: '0', backgroundColor: '#222', color: '#fff' }}>
        <Header />
        <div style={{ paddingTop: '80px'}} >
          {children}
        </div> 
      </body>
    </html>
  )
}
