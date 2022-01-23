import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <header>
            <nav className={isOpen === false ? 'navigation' : 'navigation visible'}>
                <div className="list">
                    <li className="item">
                        <Link href="/"><a href="#">Home</a></Link>
                    </li>
                    <li className="item">
                        <Link href="/docs"><a href="#">Docs</a></Link>
                    </li>
                    <li className="item">
                        <Link href="/examples"><a href="#">Examples</a></Link>
                    </li>
                </div>
            </nav>
            <Link href="/">
                <a>
                <section className="logo">
                    <div className="image-container">
                        <Image src="/images/spicy.png" alt="SpicySS" layout="fill" object-fit="contain"/>
                    </div>
                    <h1>SpicySS</h1>
                </section>
                </a>
            </Link>
            <span>
                <Link href="/contribute">
                    <a href="#">
                        Get Spicy!
                    </a>
                </Link>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(!isOpen)} className={isOpen === false ? 'burger' : 'hidden'} width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(!isOpen)} className={isOpen === false ? 'hidden' : 'burger'} width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
                <path d="M15 5v2a2 2 0 0 0 2 2h2" />
                <path d="M5 15h2a2 2 0 0 1 2 2v2" />
                <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
            </svg>
        </header>
        <style jsx>{`
            header {
                height:8.5vh;
                width:100vw;
                background:#502020;
                display:grid;
                grid-template-columns:1fr 1fr 1fr;
                grid-template-rows:1fr;
                place-items:center;
                color:white;
                padding:0 2rem;
                position:fixed;
                top:0;
                z-index:20;
            }

            .burger {
                display:none;
            }

            .hidden {
                display:none;
            }

            .list {
                display:flex;
                align-items:center;
            }

            .item {
                margin:0 1rem 0 0;
                list-style:none;
            }

            .logo {
                display:flex;
                align-items:center;
            }

            .image-container {
                background:#fff;
                width:5.5vh;
                height:5.5vh;
                border-radius:50%;
                position:relative;
                margin:0 1rem 0 0;
            }

            span {
                background:#903030;
                padding:.7rem 1.2rem;
                font-weight:500;
                font-size:1.1rem;
                filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
                border-radius:1rem;
            }

            @media (max-width: 1200px) {
                header {
                    display:flex;
                    justify-content:space-between;     
                }

                .navigation {
                    position:absolute;
                    top:8.5vh;
                    right:1vh;
                    background:#502020;
                    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
                    z-index:5;
                    transform:translateY(-150%);
                    transition:all .3 ease-in-out;
                }

                .list {
                    flex-direction:column;
                    padding:1rem;
                }

                .item {
                    margin: 1rem 0;
                }

                .burger {
                    display:block;
                    transition:all .3 ease-in-out;
                }

                span {
                    display:none;
                }

                .visible {
                    display:flex;
                    transform:translateY(0);
                }

                .hidden {
                    position:fixed;
                    opacity:0;
                }
            }
        `}</style>
        </>
    )
}