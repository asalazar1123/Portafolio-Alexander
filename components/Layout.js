import Navbar from "./Navbar";
import Head from 'next/head';

const Layout = ({children}) => (
  <>
    <Head>
      <title>Portafolio UDD</title>
    </Head>
    <Navbar />

    <main className="container py-4">
    {children}
    </main>

    <footer className="bg-dark text-light text-center">
        <div className="container p-4">
            <h1>&copy; Alexander Salazar Portafolio</h1>
            <p>1998 - {new Date().getFullYear()}</p>
            <p>Todos los derechos reservados</p>
        </div>
    </footer>

  </>
)

export default Layout;
