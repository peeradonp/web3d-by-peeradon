import { useLayoutEffect, useRef } from 'react';
import { Gradient } from '../background/Gradient';
import { Header } from './components/header';
import { Welcome } from './components/welcome';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './components/about';
import GiveAway from './components/giveaway';
const MainPage = () => {
    const MAXPAGE = 3
    useLayoutEffect(() => {
        const gradient = new Gradient()
        gradient.initGradient('#gradient-canvas')
    }, [])

    const parallax = useRef(null)

    const scroll = (step) => {
        if (parallax.current) {
            if (parallax.current.offset + step >= 0 && parallax.current.offset + step < MAXPAGE)
                parallax.current.scrollTo(parallax.current.offset + step)
        }
    }


    return (
        <div className="h-[100vh] w-[100vw] ">
            <Header scroll={scroll} />
            <canvas id="gradient-canvas" data-transition-in />
            <div className='bg-black bg-opacity-20 w-full h-full absolute' />

            <div className='absolute right-4 bottom-4 z-10 space-y-4'>
                <div className='cursor-pointer rounded-xl bg-black bg-opacity-40' onClick={() => {
                    scroll(-1)
                }}>
                    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 34.5329L28.5 15L48 34.5329L44.5387 38L28.5 21.9342L12.4612 38L9 34.5329Z" fill="#CCCBCB" />
                    </svg>
                </div>
                <div className='cursor-pointer rounded-xl bg-black bg-opacity-40' onClick={() => {
                    scroll(1)
                }}>
                    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 21.4671L28.5 41L9 21.4671L12.4613 18L28.5 34.0658L44.5388 18L48 21.4671Z" fill="#CCCBCB" />
                    </svg>
                </div>
            </div>

            <Parallax ref={parallax} pages={MAXPAGE} enabled={false} >
                <ParallaxLayer offset={0}  >
                    <Welcome />
                </ParallaxLayer>
                <ParallaxLayer offset={1}  >
                    <GiveAway />
                </ParallaxLayer>
                <ParallaxLayer offset={2}  >
                    <About />
                </ParallaxLayer>
            </Parallax>
            <a href='https://www.linkedin.com/in/peeradon-phraekjinda-565b40239/' target='_blank' rel="noreferrer" >
                <div className='absolute bottom-2 left-2 bg-black rounded-xl bg-opacity-10 p-4 cursor-pointer'>
                    <IconLinkdin />
                </div>
            </a>
        </div >
    );
};

export default MainPage;


const IconLinkdin = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#0288d1" d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z" /></svg>
    )
}