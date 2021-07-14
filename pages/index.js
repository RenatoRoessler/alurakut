import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import React from "react";

function ProfeileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "renatoroessler";
  const [comunidades, setComunidades] = React.useState([{id: new Date().toDateString(),title: 'Eu odeio acordar cedo', image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}]);
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfeileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArena" style={{ gridArea: "welcomeArena" }}>
          <Box>
            <h1 className="title">Bem vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle"> O que você deseja fazer?</h2>

            <form
              onSubmit={function handleCriarComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target)

                
                const comunidade = {
                  id: new Date().toDateString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image')
                }
                const comunidadesAtualizadas = [ ...comunidades,comunidade]
                setComunidades(comunidadesAtualizadas)
              }}
            >
              <div>
                <input
                  placeholder="qual vai ser o nome da sua comunidade?"
                  name="title"
                  arial-label="qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  arial-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <ul >
              {comunidades.map((itemAtual) => (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`} >
                  <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} >
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
