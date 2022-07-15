import React, { useState, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import Image from 'next/image'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Link from "next/link";

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
          <Link href="/">
            <Image src="/NetflixLogoSvg.png" alt="Vercel Logo" width={111} height={30} />
          </Link>

          <div className={styles.headerSections}>
            <div>
              <p>
                <Link>Home</Link>
              </p>
            </div>
            <div>
              <p>
                <Link>Séries</Link>
              </p>
            </div>
            <div>
              <p>
                <Link>Filmes</Link>
              </p>
            </div>
            <div>
              <p>
                <Link>Bombando</Link>
              </p>
            </div>
            <div>
              <p>
                <Link>Minha lista</Link>
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
              <Link>Pedro</Link>
            </p>
          </div>
          <div>
            <Image src="/NotificationBell.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div className={styles.item} >
            <Image
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
            <div className={styles.dropdownContent}>
              <Link>Meus dados</Link>
              <Link >Dependentes</Link>
              <Link>Sair</Link>
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
          <Link href="/">
            <Image src="/NetflixLogoSvg.png" />
          </Link>
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
                <Link>Filmes</Link>
                <Link>Séries</Link>
                <Link>Bombando</Link>
                <Link>Originais BseenFlix</Link>
              </div>
            </div>
            )}
          </div>
          <div>
            <Image src="/NotificationBell.png" alt="Vercel Logo" width={20} height={20} />
          </div>
          <div className={styles.item} >
            <Image
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
            <div className={styles.dropdownContent}>
              <Link>Meus dados</Link>
              <Link>Dependentes</Link>
              <Link>Sair</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
