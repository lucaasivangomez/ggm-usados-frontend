import { useEffect, useRef, useState } from 'react'
import { data } from './../../assets/data';
import LogoAdidas from "./../../assets/Adidas_Logo.jpg";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const App = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useNavigate();

  const redirectToHome = (e: any) => {
    e.preventDefault();
    goTo("/");
  }
  const redirectToInfo = (e: any) => {
    e.preventDefault();
    goTo("/info");
  }

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode) {
      const imgNode = (listNode as HTMLElement).querySelectorAll("li > img")[currentIndex];
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex]);


  const scrollToImage = (direction: string) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <>
      <header>
        <div className="color-fondo">
          <div className="container flex justify-between ">
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
            <img src={LogoAdidas} alt="Logo Adidas" className="imagenes" />
          </div>
        </div>
      </header>
      <main>
        <hr />
        <div className='gap-x-4 flex'>
          <Button onClick={redirectToHome} variant="outlined">HOME</Button>
          <Button onClick={redirectToInfo} variant="outlined">INFORMACION</Button>
          <Button variant="outlined">CONTACTO</Button>
        </div>
        <hr />
        <div className="main-container">
          <div className="slider-container">
            <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
            <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            <div className="container-images">
              <ul ref={listRef}>
                {
                  data.map((item) => {
                    return <li key={item.id}>
                      <img src={item.imgUrl} width={720} height={480} />
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="dots-container">
              {
                data.map((_, idx) => (
                  <div key={idx}
                    className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => goToSlide(idx)}>
                    &#9865;
                  </div>))
              }
            </div>
          </div>
        </div >
      </main>
      <div>

      </div>
    </>
  )
}
export default App;