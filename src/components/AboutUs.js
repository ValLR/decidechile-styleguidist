import React, { Component } from 'react';
import PropTypes from 'prop-types';
import History from './History.js';
import Team from './Team.js';

const testInfo = {
    "About": {
        "biography": {
            "title" : "Nuestro Origen",
            "body": "Utilizar el expertise tecnológico de Unholster – empresa que desde hace 10 años utiliza el BigData," +
                " Optimización y Desarrolla software a la medida- para dar un beneficio directo a la comunidad." +
                " Ésa fue la idea que tuvieron Antonio Díaz, Cristóbal Huneeus, Sebastián Acuña, Marta Lagos y" +
                " Andrés Villavicencio, para crear una plataforma digital que informara en tiempo real los resultados de" +
                " las elecciones presidenciales de Chile y a la vez mantuviera en línea una base de datos histórica de" +
                " las elecciones de nuestro país desde el regreso a la democracia: así nace DecideChile, la primera " +
                "plataforma de inteligencia electoral del país. El debut fue en las elecciones presidenciales y" +
                " parlamentarias de 2013, cuando estos cinco expertos tomaron en tiempo real los datos entregados por el" +
                " Servel y los dieron a conocer en forma sencilla a través de www.decidechile.cl. Esto, acompañado de " +
                "una serie de análisis que sin el uso de un software especialmente diseñado para comprender el Bigdata " +
                "del padrón electoral, habría sido imposible de conocer en forma instántanea: ¿Quiénes no concurrieron" +
                " a votar?, ¿Cómo se estaba dando el voto cruzado?, ¿por quiénes estaban votando los electores de las" +
                " terceras fuerzas políticas en segunda vuelta?. Ésas son sólo algunas de las preguntas que respondieron" +
                " en segundos y que luego llevaron detalladamente al papel, en el libro Los Dos Chiles escrito por Díaz," +
                " Lagos y Huneeus y publicado en 2015 por Editorial Catalonia."
        },
        "team": {
            "title": "Quiénes Somos",
            "members": [
                {
                    "name": "Sebastián Acuña",
                    "media": "https://www.decidechile.cl/quienes-somos/sebastian.png",
                    "body": "Director de Visualización y BigData y Socio Fundador de DecideChile. Formado en la Escuela" +
                        " de Ingeniería de la Universidad de Chile, es experto en integración de tecnologías y " +
                        "herramientas en proyectos BigData e integración continua. Actualmente se desempeña como Director" +
                        " de Tecnología de Unholster S.A. del cual es socio fundador desde 2008."
                }, {
                    "name": "Antonio Díaz",
                    "media": "https://www.decidechile.cl/quienes-somos/antonio.png",
                    "body": "Director General y Socio Fundador de DecideChile. Es Ingeniero Civil de la Universidad" +
                        " de Chile, experto en BigData, Optimización, Data Mining y Performance Marketing." +
                        " Desde 2008 es Socio y Gerente General de Unholster S.A., cargo donde lidera la" +
                        " consolidación de nuevos negocios y proyectos de innovación. Junto a Cristóbal Huneeus" +
                        " y Marta Lagos escribieron Los Dos Chiles ."
                }, {
                    "name": "Cristóbal Huneeus",
                    "media": "https://www.decidechile.cl/quienes-somos/cristobal.png",
                    "body": "Director de Inteligencia Electoral y Socio fundador de DecideChile. Es Ingeniero" +
                        " Industrial de la Universidad de Chile y Doctor en Economía de Stanford University." +
                        " Junto a Antonio Díaz y Marta Lagos escribieron Los Dos Chiles , interpretando los" +
                        " resultados de las elecciones del 2013. Actualmente es asesor del Ministerio de Trabajo" +
                        " y Prevision Social. Fue asesor del Ministerio de Hacienda en el primer gobierno de Michelle" +
                        " Bachelet y miembro de la Comisión Asesora Presidencial para el Trabajo y Equidad."
                }
            ]
        }
    }
};

class AboutUs extends Component {
    render() {
        return(
            <div className={"about-us"}>
                <History title={testInfo.About.biography.title} body={testInfo.About.biography.body}/>
                <Team title={testInfo.About.team.title} members={testInfo.About.team.members}/>
            </div>
        )
    }
}



export default AboutUs;


