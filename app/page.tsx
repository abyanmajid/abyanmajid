import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { RPlain, PythonPlain, TensorflowLine, NextjsLine, GoPlain, RustPlain, MongodbPlain, PostgresqlPlain, DockerPlain, GooglecloudPlain } from 'devicons-react'
import { PROJECTS } from "@/lib/constants";

export default function Home() {
  return <>
    <main className="prose dark:prose-invert">
      <div className="grid grid-cols-2 mt-8 mb-4">
        <div>
          <h1 className="font-bold text-2xl">Abyan Majid</h1>
        </div>
        <div className="flex justify-end">
          <Link href="https://github.com/abyanmajid" target="_blank">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/abyanmajid/" target="_blank">
            <Button variant="outline" size="icon">
              <LinkedInLogoIcon />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
      <Separator />
      <section id="about" className="gap-2 mt-6 grid grid-cols-4">
        <Image src="/pic.jpg" alt="pic.jpg" width={150} height={250} />
        <div className="text-primary col-span-3">
          <h1 className="font-bold mb-2">Abyan Majid <span className="font-normal text-muted-foreground">(pronounced: Uh-bee-yun)</span></h1>
          <h1>Computer Science Student (1st Year)</h1>
          <h1>University of Sydney (2023-2027)</h1>
          <h1 className="mt-2"><span className="font-bold">Interests:</span> Open-source software, AI, Web3</h1>
          <h1 className="mt-2"><span className="font-bold">Contacts:</span></h1>
          <ul>
            <li><EnvelopeClosedIcon className="icon" />&nbsp;abyan@abydyl.net</li>
            <li><LinkedInLogoIcon className="icon" />&nbsp;abyanmajid</li>
            <li><DiscordLogoIcon className="icon" />&nbsp;kinderheim.511</li>
          </ul>
        </div>
      </section>
      <section id="skills" className="mt-8">
        <h2 className="text-2xl mb-2">Skills</h2>
        <Separator />
        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <p className="font-bold">Web Development</p>
          </div>
          <div className="col-span-4">
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>DevOps Methodologies</p>
          </div>
          <div className="col-span-5 flex">
            <NextjsLine color="white" size="36" className="inline-icon" />
            <RustPlain color="white" size="36" className="inline-icon" />
            <GoPlain color="white" size="36" className="inline-icon" />
            <MongodbPlain color="white" size="36" className="inline-icon" />
            <PostgresqlPlain color="white" size="36" className="inline-icon" />
            <DockerPlain color="white" size="36" className="inline-icon" />
            <GooglecloudPlain color="white" size="36" className="inline-icon" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <p className="font-bold">Data Science &amp; AI</p>
          </div>
          <div className="col-span-4">
            <p>Supervised Learning</p>
            <p>Data Exploration</p>
          </div>
          <div className="col-span-5 flex">
            <TensorflowLine color="white" size="36" className="inline-icon" />
            <PythonPlain color="white" size="36" className="inline-icon" />
            <RPlain color="white" size="36" className="inline-icon" />
          </div>
        </div>

      </section>
      <section id="projects" className="mt-8">
        <h2 className="text-2xl mb-2">Personal Projects</h2>
        <Separator />
        {[...PROJECTS].reverse().map(project => (
          <div key={project.href} className="mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <p>{project.year}</p>
            </div>
            <div className="col-span-3">
              <p className="font-bold">{project.name}</p>
            </div>
            <div className="col-span-6">
              <p>{project.description}</p>
              <p className="mt-1 text-muted-foreground text-sm">{project.languages}</p>
            </div>
            <Link href={project.href} target="_blank">
              <div className="col-span-2 ml-2 grid justify-start">
                <Button variant="secondary"><GitHubLogoIcon />&nbsp;&nbsp;Source</Button>
              </div>
            </Link>
          </div>
        ))}
      </section>

    </main></>
}
