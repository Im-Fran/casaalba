import toast from "react-hot-toast";
import { FormEvent } from 'react'

const Home = () => {

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success('Mensaje enviado correctamente');
  }

  return <div className="flex flex-col min-h-screen">
    {/* Hero Section */}
    <header className="bg-gradient-to-b from-teal-800 to-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="rounded-full bg-white p-6 shadow-sm">
            <h1 className="flex items-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-6xl text-teal-900">
              <img className="h-20" src="/casaalba.png" alt="Casa Alba" />
              Casa Alba
            </h1>
          </div>
          <p className="max-w-[600px] text-gray-800 md:text-xl">
            Somos una marca propia con artículos de excelente calidad.
          </p>
          {/*<button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">*/}
          {/*  Ver Productos*/}
          {/*</button>*/}
        </div>
      </div>
    </header>

    {/* Products Section */}
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Nuestros Productos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="aspect-square relative mb-4 bg-[#BEEED6] rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    alt="Detergente Líquido"
                    className="object-cover w-3/4"
                    src="/productos/detergente_liquido.png"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Detergente Líquido Biodegradable</h3>
              <p className="text-gray-700 mb-4">5 Litros</p>
              <p className="text-2xl font-bold text-teal-700">$6.900</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="aspect-square relative mb-4 bg-[#BEEED6] rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    alt="Lavalozas"
                    className="object-cover w-3/4"
                    src="/productos/lavalozas.png"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Lavalozas</h3>
              <p className="text-gray-700 mb-4">5 Litros</p>
              <p className="text-2xl font-bold text-teal-700">$4.800</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="aspect-square relative mb-4 bg-[#BEEED6] rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    alt="Jabón de Glicerina"
                    className="object-cover w-3/4"
                    src="/productos/jabon_glicerina.png"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Jabón de Glicerina</h3>
              <p className="text-gray-700 mb-4">5 Litros</p>
              <p className="text-2xl font-bold text-teal-700">$6.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16 bg-[#BEEED6]">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="rounded-full bg-teal-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Calidad Premium</h3>
            <p className="text-gray-700">Productos concentrados de alta eficacia</p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-teal-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M3 7V5c0-1.1.9-2 2-2h2"/>
                <path d="M17 3h2c1.1 0 2 .9 2 2v2"/>
                <path d="M21 17v2c0 1.1-.9 2-2 2h-2"/>
                <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/>
                <rect height="8" width="8" x="8" y="8"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Rendimiento</h3>
            <p className="text-gray-700">Mayor duración por su fórmula concentrada</p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-teal-200 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-800">Satisfacción</h3>
            <p className="text-gray-700">Garantía de calidad en cada producto</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Contáctanos</h2>
        <form onSubmit={submit} className="max-w-lg mx-auto bg-[#BEEED6] p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-teal-800">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-teal-800">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-teal-800">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              required
            />
          </div>
          <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>

    <footer className="bg-gradient-to-b from-white to-teal-800">
      <div className="container px-4 py-8 mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Casa Alba. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
};

export default Home