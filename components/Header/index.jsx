import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import router from "next/router";
import Image from 'next/image'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

// type Color = "white" | "rgba(255, 255, 255, 0.85)";
// type Position = "absolute" | "relative";

// interface HeaderProps {
//   color?: Color;
//   position?: Position;
// }

export default function Header({
  position,
  color = "black",
  ...rest
}) {
  const [width, height] = useWindowSize();

  const [useMobileModal, setUseMobileModal] = useState(false);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
  }

  function openMobileModal() {
    setUseMobileModal(!useMobileModal);
  }

  if (width > 1000) {
    return (
      <header
        className={styles.headerContainer}
        style={{ background: color, position: position }}
      >
        <div className={styles.headerLogo}>
          <a href="/">
            <Image src="/NetflixLogoSvg.png" alt="Vercel Logo" width={111} height={30} />
          </a>

          <div className={styles.headerSections}>
            <div>
              <p>
                <a href="/#about">Home</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/#how-it-works">Séries</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/faq">Filmes</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/blog">Bombando</a>
              </p>
            </div>
            <div>
              <p>
                <a href="/#form">Minha lista</a>
              </p>
            </div>
          </div>
        </div>

        

        <div className={styles.headerButtons}>
          <div>
            <Image src="/Search.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div>
            <p>
              <a>Pedro</a>
            </p>
          </div>
          <div>
            <Image src="/NotificationBell.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div className={styles.item} >
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
            <div className={styles.dropdownContent}>
              <a>Meus dados</a>
              <a >Dependentes</a>
              <a>Sair</a>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={styles.headerContainer}
        style={{ background: color, position: position }}
      >
        <div className={styles.headerLogo}>
          <a href="/">
            <img src="/NetflixLogoSvg.png" />
          </a>
        </div>

        <div className={styles.headerButtons}>
          <div>
            <Image src="/Search.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div onClick={openMobileModal}>
            <DensityMediumIcon/>
            {useMobileModal && (
            <div className={styles.burger_box} >
              <div className={styles.dropdownContent}>
                <a>Filmes</a>
                <a>Séries</a>
                <a>Bombando</a>
                <a>Originais BseenFlix</a>
              </div>
            </div>
            )}
          </div>
          <div>
            <Image src="/NotificationBell.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div className={styles.item} >
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
            <div className={styles.dropdownContent}>
              <a>Meus dados</a>
              <a >Dependentes</a>
              <a>Sair</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
