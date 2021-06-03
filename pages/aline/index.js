import Head from "next/head";
import * as Icon from "react-feather";
import Image from "next/image";
import Noticias from "../../components/utils/listaNoticias";
import Layout from '../../components/layout';
import SliderShow from '../../components/utils/slider';
import Carousel from '../../components/utils/carousel';

const Aline = () => {
  return (
    <div className="pagina">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div class="slider container">
      <SliderShow></SliderShow>
      {/* <div className="grid two-grid">
        <div className="column">
          <Card dados={dados} classe="card-slider"></Card>
          <div className="redes">
            <a href="#" className="btn">
              <Icon.Instagram size={20} />
            </a>
            <a href="#" className="btn">
              <Icon.Facebook size={20} />
            </a>
            <a href="#" className="btn">
              <Icon.Linkedin size={20} />
            </a>
            <a href="#" className="btn">
              <Icon.Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="column">
          <div className="container content">
            <div className="title">
              <h2>Sobre mim</h2>
            </div>
            <div className="descricao">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br></br>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div> */}

      </div>
      <div className="container servicos">
        <div className="grid grid-fr-fr ">
          <div className="flex">
            <img className="center" src="./sliders/paraempresa.svg" height="280px" />
          </div>
          <div className="links">
          <h3 className="titulo">Para a sua empresa</h3>
          <div className="sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
            <div href="#" className="link">
              <div className="label">
                <Image
                  src="/svg/014-customer%20review.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Revisão de CV</p>
              </div>
            </div>
            <div href="#" className="link">
              <div className="label" gloss="Text shown on hovering">
                <Image
                  src="/svg/030-note.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Configuração no LinkedIn</p>
              </div>
            </div>
            <div href="#" className="link">
              <div className="label">
                <Image
                  src="/svg/040-satisfaction.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Simulação e preparação para entrevistas de emprego</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-fr-fr">
          <div className="links">
          <h3 className="titulo">Para você</h3>
          <div className="sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
            <div href="#" className="link">
              <div className="label">
                <Image
                  src="/svg/014-customer%20review.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Revisão de CV</p>
              </div>
            </div>
            <div href="#" className="link">
              <div className="label" gloss="Text shown on hovering">
                <Image
                  src="/svg/030-note.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Configuração no LinkedIn</p>
              </div>
            </div>
            <div href="#" className="link">
              <div className="label">
                <Image
                  src="/svg/040-satisfaction.svg"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                <p>Simulação e preparação para entrevistas de emprego</p>
              </div>
            </div>
          </div>
         
          <div className="flex">
            <img className="center" src="./sliders/seuperfil.svg" height="280px" />
          </div>
        </div>
      </div>
      <div class="background carousel">
      <Carousel></Carousel>
      </div>


        <div class="container">
        <Noticias></Noticias>
        </div>
        </Layout>
    </div>
  );
};
export default Aline;
