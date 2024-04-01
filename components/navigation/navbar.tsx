"use client";

import React, { useState } from "react";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaBookOpen } from "react-icons/fa";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const { scrollDirection, beyondNavbar } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  let navStyles = "translate-y-0";

  if (beyondNavbar) {
    if (scrollDirection === "DOWN") {
      navStyles = "-translate-y-full"; // hides the navbar
    } else {
      navStyles = "translate-y-0"; // shows the navbar
    }
  }

  return (
    <>
      <nav
        className={cn(
          "bg-darkPurple dark:bg-blue-400 hidden md:block fixed left-0 right-0 top-0 z-9999 transition-transform duration-500 ease-in-out",
          scrollDirection === "DOWN" && "-translate-y-[10rem]",
          scrollDirection === "UP" && "translate-y-0"
        )}
      >
        <div className="max-w-[62rem] p-2 mx-auto flex justify-between items-center">
          <Link href="/" passHref>
            <Image
              src="/images/icon.svg"
              width={50}
              height={50}
              alt="Anilist icon"
            />
          </Link>

          <div>
            <div className="flex items-center gap-6">
              <Link href="/login" passHref>
                <Button variant="ghost" className="font-normal">
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="primary">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <MobileNav /> */}
    </>
  );
};

export default Navbar;
