import './styles/App.css';
import { Testimonio } from './components/Testimonio/Testimonio';
const data = require('./components/Testimonio/Testimonios.json');

// Trabajé las props de dos formas diferentes:
// Para el primer testimonio importe un json con la data requerida y pase sus valores como argumento de las props.
// Para el segundo testimonios lo que hice fue pasar directamente el valor de las props de forma manual.
// Para el tercer testimonio utilice una combinación de las dos formas.

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio 
        nombre={data.test1.nombre}
        img={data.test1.img}
        pais={data.test1.pais}
        cargo={data.test1.cargo}
        empresa={data.test1.empresa}
        testimonio={data.test1.testimonio}
      />
      <Testimonio
        nombre='Shawn Wang'
        img='shawn'
        pais='Singapur'
        cargo='Ingeniero de software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
      />
      <Testimonio
        nombre={data.test3.nombre}
        img={data.test3.img}
        pais={data.test3.pais}
        cargo='Ingeniera de software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
      />
    </div>
  );
}

export default App;
