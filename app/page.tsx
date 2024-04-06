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
          <h1 className="font-bold md:text-2xl text-xl">Abyan Majid</h1>
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
          <h1 className="font-bold mb-2 md:text-base text-sm">Abyan Majid <span className="font-normal text-muted-foreground">(pronounced: Uh-bee-yun)</span></h1>
          <h1 className="md:text-base text-sm">Computer Science Student (1st Year)</h1>
          <h1 className="md:text-base text-sm">University of Sydney (2023-2027)</h1>
          <h1 className="mt-2 md:text-base text-sm"><span className="font-bold">Interests:</span> Rust, ML/DL, Web3</h1>
          <h1 className="mt-2 md:text-base text-sm"><span className="font-bold">Contacts:</span></h1>
          <ul className="md:text-base text-sm">
            <li><EnvelopeClosedIcon className="icon" />&nbsp;abyan@abydyl.net</li>
            <li><LinkedInLogoIcon className="icon" />&nbsp;abyanmajid</li>
            <li><DiscordLogoIcon className="icon" />&nbsp;yankinder</li>
          </ul>
        </div>
      </section>
      <section id="skills" className="mt-8">
        <h2 className="md:text-2xl text-xl mb-2">Skills</h2>
        <Separator />
        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <p className="font-bold md:text-base text-sm">Web Development</p>
          </div>
          <div className="col-span-4 md:text-base text-sm">
            <p className="md:mb-0 mb-2 md:text-base text-sm">Frontend Development</p>
            <p className="md:mb-0 mb-2 md:text-base text-sm">Backend Development</p>
            <p className="md:mb-0 mb-2 md:text-base text-sm">DevOps Methodologies</p>
          </div>
          <div className="col-span-5">
            <NextjsLine color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <RustPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <GoPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <MongodbPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <PostgresqlPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <DockerPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <GooglecloudPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <p className="font-bold md:text-base text-sm">Data Science &amp; AI</p>
          </div>
          <div className="col-span-4">
            <p className="md:mb-0 mb-2 md:text-base text-sm">Supervised Learning</p>
            <p className="md:mb-0 mb-2 md:text-base text-sm">Data Exploration</p>
          </div>
          <div className="col-span-5 flex">
            <TensorflowLine color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <PythonPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
            <RPlain color="white" size="32" className="inline-icon md:mb-0 mb-2" />
          </div>
        </div>

      </section>
      <section id="projects" className="mt-8">
        <h2 className="md:text-2xl text-xl mb-2">Personal Projects</h2>
        <Separator />
        {[...PROJECTS].reverse().map(project => (
          <div key={project.href} className="mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-1 md:block hidden">
              <p className="md:text-base text-sm">{project.year}</p>
            </div>
            <div className="col-span-3">
              <p className="font-bold md:text-base text-sm">{project.name}</p>
            </div>
            <div className="col-span-6">
              <p className="md:text-base text-sm">{project.description}</p>
              <p className="mt-1 text-muted-foreground text-sm">{project.languages}</p>
            </div>
            <Link href={project.href} target="_blank">
              <div className="col-span-2 ml-2 grid justify-start">
                <Button className="md:text-base text-sm" variant="secondary"><GitHubLogoIcon />&nbsp;&nbsp;Source</Button>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main></>
}
