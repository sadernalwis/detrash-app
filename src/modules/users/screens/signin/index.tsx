"use client";

import LocaleToggler from "@/components/locale-toggler";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/client";

import Image from "next/image";

export const SigninScreen = () => {
  const t = useI18n();

  return (
    <div className="flex flex-1 justify-between h-lvh">
      <main className="flex-1 flex-shrink-0 flex flex-col justify-center h-full">
        <div className="p-5 absolute top-0 w-full z-10 ">
          <nav className="flex justify-between items-center">
            <Image
              src="/assets/brand/recy-logo.png"
              width={88}
              height={88}
              alt="Recy Logo"
            />

            <Button variant="secondary" className="uppercase" size="lg">
              whitepaper
            </Button>
          </nav>
        </div>

        <div className="flex flex-col p-5 gap-5 justify-center  max-w-xl flex-1">
          <h1 className="text-6xl font-bold">
            {t("home.welcomeMessage1")}
            <br />{" "}
            <span className="text-primary">{t("home.welcomeMessage2")}</span>
          </h1>
          <p className="text-base  text-gray-500">{t("home.description")}</p>
          <Button size="lg">{t("home.login")}</Button>
        </div>

        <div className="flex  justify-center p-5">
          <LocaleToggler />
        </div>
      </main>
      <aside className="relative h-lvh flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
        <Image
          className="w-full object-cover sm:h-72 md:h-96"
          fill
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        />
        quotes
      </aside>
    </div>
  );
};
