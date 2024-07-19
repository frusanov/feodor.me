import type { NextPage } from "next";
import Link from "next/link";
import { Card } from "../components/Card";
import { CardWrapper } from "../components/CardWrapper";
import Head from "next/head";
import { Contacts } from "../components/Contacts";
import { Header } from "../components/Header";
import { CardContent } from "../components/CardContent";
import { Label } from "../components/Label";

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
            <p>Full-Stack Developer</p>
          </Header>
          <CardContent>
            <p>
              Welcome to my personal webpage!
            </p>
            <p>
              At this moment I’m working as Lead Frontend Developer @{' '}
              <Link href={'https://usegateway.net/'} target={'_blank'}>UseGateway</Link>
            </p>

            <h4>I&apos;m using in my practice:</h4>

            <Label>JavaScript</Label>
            <Label>TypeScript</Label>
            <Label>NodeJS</Label>
            <Label>React</Label>
            <Label>Vue</Label>
            <Label>NextJS</Label>
            <Label>Nuxt</Label>
            <Label>Styled Components</Label>
            <Label>Webpack</Label>
            <Label>TurboRepo</Label>
            <Label>Docker</Label>
            <Label>GitHub Actions</Label>
            <Label>Figma</Label>

            <h4>I familiar with:</h4>

            <Label>PHP</Label>
            <Label>ArgoCD</Label>
            <Label>SolidJS</Label>
            <Label>Astro</Label>
            <Label>WebGL&nbsp;<small>(Pixi / Three)</small></Label>

            <h4>Enjoying:</h4>

            <Label>Self-education</Label>
            <Label>Linux</Label>
            <Label>UX design</Label>
            <Label>Environmental photography</Label>
            <Label>Half Life&nbsp;<small>(game series)</small></Label>
            <Label>Household electrics</Label>
            <Label>Mikrotik routers</Label>
            <Label>Shitty coffee 3 in 1</Label>
          </CardContent>

          <Contacts>
            <h4>Contacts:</h4>

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
            </p>
          </Contacts>
        </Card>
      </CardWrapper>
    </>
  );
};

export default Home;
