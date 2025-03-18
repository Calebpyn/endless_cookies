import { useEffect, useState } from "react";
import Cookie from "./components/Cookie";

import gta6 from "./assets/gta6.jpg";
import logo from "./assets/logo.png";
import { FaDownload } from "react-icons/fa";

import CircularProgress from "@mui/material/CircularProgress";

type cookie = {
  title: string;
  desc: string;
};

function App() {
  const [allCookies, _] = useState<cookie[]>([
    {
      title: "🍪 Cookie de Alto Desempeño",
      desc: "Papito, esta cookie requiere un procesador mínimo de 12 núcleos y 64GB de RAM. No es nuestro problema si sigues usando una licuadora.",
    },
    {
      title: "🍪 Cookie de GPU Obligatoria",
      desc: "Sin esta cookie, la página se verá a 10 FPS. ¿Tienes una RTX 4090? No. Entonces dale aceptar y no preguntes.",
    },
    {
      title: "🍪 Cookie de Turbo Velocidad™",
      desc: "Acepta esta cookie o nos veremos obligados a correr la página en modo PowerPoint con transiciones de los 90.",
    },
    {
      title: "🍪 Cookie de Windows Original",
      desc: "Antes de aceptar, confírmanos una cosa: ¿Tu Windows es original o es una de esas versiones piratas con un ‘Activar Windows’ flotando?",
    },
    {
      title: "🍪 Cookie de Teclado Mecánico",
      desc: "Esta web solo está optimizada para gente con teclados mecánicos. Si usas un teclado de membrana… déjalo, ya perdiste.",
    },
    {
      title: "🍪 Cookie de WiFi Corporativo",
      desc: "Si estás usando el internet del OXXO, mejor ni sigas. Esta cookie exige una conexión de mínimo 1GB/s simétrico.",
    },
    {
      title: "🍪 Cookie de Monitor Decente",
      desc: "Detectamos que sigues usando un monitor de 1366x768… ¿Sigues en el 2008 o qué? Esta cookie no está diseñada para pobres resoluciones.",
    },
    {
      title: "🍪 Cookie de RAM Disponible",
      desc: "Esta cookie requiere al menos 8GB de RAM disponibles. Si no los tienes, cierra el Chrome con 50 pestañas y vuelve a intentar.",
    },
    {
      title: "🍪 Cookie de Sistema Operativo Moderno",
      desc: "¿Acaso sigues usando Windows 7? Hermano, deja de vivir en el pasado y acepta la cookie como un adulto funcional.",
    },
    {
      title: "🍪 Cookie de PC Gamer™",
      desc: "No queremos asumir cosas, pero si tu PC tiene stickers de ‘Intel Inside’, no tienes derecho a rechazar esta cookie.",
    },
    {
      title: "🍪 Cookie de Procesador Potente",
      desc: "Esta web no se va a ver bien en tu Core 2 Duo. No es por mala onda, es porque esa basura no corre ni el Solitario.",
    },
    {
      title: "🍪 Cookie de Seguridad Máxima",
      desc: "Si tu antivirus es el ‘Windows Defender’, mejor ni hablemos. Esta cookie exige protección real.",
    },
    {
      title: "🍪 Cookie de Batería en Buen Estado",
      desc: "Si tu laptop dura menos de 30 minutos sin enchufe, ya ni te molestes en aceptar. Te la va a drenar más rápido que Chrome.",
    },
    {
      title: "🍪 Cookie de Modo Oscuro",
      desc: "Esta cookie está optimizada para modo oscuro. Si usas modo claro… revisa tu vida, bro.",
    },
    {
      title: "🍪 Cookie de Laptop con Buen Teclado",
      desc: "Si usas una MacBook con teclado mariposa, acepta la cookie rápido antes de que una tecla deje de funcionar.",
    },
    {
      title: "🍪 Cookie de Almacenamiento Suficiente",
      desc: "Si tu disco está al 99% de capacidad, no aceptes esta cookie. Mejor borra ese Word que dice ‘Tarea final definitiva FINAL FINAL AHORA SÍ’.",
    },
    {
      title: "🍪 Cookie de Sonido Premium",
      desc: "Si el audio de tu laptop suena como radio AM, esta cookie se niega a activarse hasta que compres unos audífonos decentes.",
    },
    {
      title: "🍪 Cookie de Sobrecarga Técnica",
      desc: "Si aceptas esta cookie, tu procesador subirá a 100% de uso. Si no puedes con eso, mejor ni lo intentes.",
    },
    {
      title: "🍪 Cookie de Respeto por el Usuario",
      desc: "Esta cookie no va a juzgar tu computadora… pero solo porque ya lo hicieron todas las anteriores.",
    },
    {
      title: "🍪 Cookie de Rendición Total",
      desc: "Si llegaste hasta aquí sin aceptar ninguna cookie, tu PC ya está a punto de explotar. ¿Para qué seguir sufriendo?",
    },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [cookieOpen, setCookieOpen] = useState<boolean>(false);
  const [selectedCookie, setSelectedCookie] = useState<number>(0);

  const closeCookie = async () => {
    setCookieOpen(false);
    await wait(1000);
    if (selectedCookie == 9) {
      setSelectedCookie(0);
    } else {
      setSelectedCookie(selectedCookie + 1);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    setCookieOpen(true);
  }, [selectedCookie]);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${gta6})` }}
    >
      <div className="w-[90%] md:w-[400px] h-[80%] bg-white flex rounded-4xl shadow-2xl justify-between items-center flex-col p-10">
        <span className="text-3xl text-center">
          ¡DESCARGAR GTA VI BETA <b>GRATUITO</b>!
        </span>
        <img src={logo} className="max-w-[200px]" />

        <span className="w-full">
          <button
            className="w-full bg-green-800 text-white rounded-xl py-5 px-5 text-xl hover:bg-green-900 tr cursor-pointer"
            onClick={() => {
              setIsLoading(true);
            }}
          >
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              <span className="w-full flex justify-between items-center select-none">
                <span>DESCARGAR</span>
                <FaDownload />
              </span>
            )}
          </button>
        </span>
      </div>

      {cookieOpen ? (
        <Cookie
          title={allCookies[selectedCookie].title}
          desc={allCookies[selectedCookie].desc}
          closeCookie={closeCookie}
        />
      ) : null}
    </div>
  );
}

export default App;
