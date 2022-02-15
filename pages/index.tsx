import type { NextPage } from "next";
import { Card } from "../components/Card";
import { CardWrapper } from "../components/CardWrapper";
import Head from "next/head";
import { Contacts } from "../components/Contacts";
import { Header } from "../components/Header";
import { CardContent } from "../components/CardContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feodor Rusanov | Personal Website</title>
      </Head>
      <CardWrapper>
        <Card>
          <Header>
            <h1>Feodor Rusanov</h1>
            <p>Full-Stack Developer / Photo Artist</p>
          </Header>
          <CardContent>
            <p>
              Hello! Welcome to my personal webpage. My name is Feodor and I'm a
              full-stack web developer, focusing more specifically on front-end
              tasks.
            </p>
            <p>
              Now I’m working on the{" "}
              <a
                href="https://blogademy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogademy
              </a>{" "}
              project as a front-end developer.
            </p>
            <p>
              My set of skills contains JavaScript and TypeScript development
              (client and server side both), I’m good at website performance
              optimization, I have actual knowledge of modern web API and some
              experience with WebGL. I work both with React and Vue ecosystems.
            </p>
          </CardContent>

          <Contacts>
            <p>
              <a href="mailto:f.rusanov@gmail.com">f.rusanov@gmail.com</a>
              <a href="https://t.me/feodor" target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a
                href="https://github.com/frusanov"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/feodor.rusanov/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </Contacts>
        </Card>
      </CardWrapper>
    </>
  );
};

export default Home;
