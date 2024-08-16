import React, { useRef, useEffect } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const carousel = carouselRef.current;
      if (carousel) {
        const itemWidth = carousel.firstChild.clientWidth;
        carousel.scrollLeft += e.deltaY > 0 ? itemWidth : -itemWidth;
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    carousel.isDown = true;
    carousel.startX = e.pageX - carousel.offsetLeft;
    carousel.scrollLeft = carousel.scrollLeft;
  };

  const handleMouseLeave = () => {
    const carousel = carouselRef.current;
    carousel.isDown = false;
  };

  const handleMouseUp = () => {
    const carousel = carouselRef.current;
    carousel.isDown = false;
  };

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    if (!carousel.isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - carousel.startX) * 3; // scroll-fast
    carousel.scrollLeft = carousel.scrollLeft - walk;
  };

  return (
    <div>
      <div
        className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 overflow-x-scroll"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}
      >
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/yPfGjmb/360157269-10210796481983664-1722906978983275411-n.jpg"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/gJtRb5b/453908275-1014178140193424-1173312172021978756-n.jpg"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/6w5Wm20/453979305-1210588539950788-6126914027126799787-n.jpg"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/Bn3jgW3/454638709-901741165311762-7559801387481033508-n.jpg"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/sj88FT0/373336607-10210980218496962-3629661989201762835-n.png"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/cwLzCnh/384501561-10227197226690863-8519082343381744892-n.jpg"
            className="rounded-box object-cover"
            draggable="false"
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

{/* <a href="https://ibb.co/pd4L6t6"><img src="https://i.ibb.co/gJtRb5b/453908275-1014178140193424-1173312172021978756-n.jpg" alt="453908275-1014178140193424-1173312172021978756-n" border="0"></a>
<a href="https://ibb.co/B3RCtm2"><img src="https://i.ibb.co/6w5Wm20/453979305-1210588539950788-6126914027126799787-n.jpg" alt="453979305-1210588539950788-6126914027126799787-n" border="0"></a>
<a href="https://ibb.co/TW2RHj2"><img src="https://i.ibb.co/Bn3jgW3/454638709-901741165311762-7559801387481033508-n.jpg" alt="454638709-901741165311762-7559801387481033508-n" border="0"></a>
<a href="https://ibb.co/Q9yy6W2"><img src="https://i.ibb.co/sj88FT0/373336607-10210980218496962-3629661989201762835-n.png" alt="373336607-10210980218496962-3629661989201762835-n" border="0"></a>

<a href="https://ibb.co/68B61C0"><img src="https://i.ibb.co/cwLzCnh/384501561-10227197226690863-8519082343381744892-n.jpg" alt="384501561-10227197226690863-8519082343381744892-n" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload pic</a><br /> */}
{/* <a href="https://ibb.co/MS2W0y3"><img src="https://i.ibb.co/yPfGjmb/360157269-10210796481983664-1722906978983275411-n.jpg" alt="360157269-10210796481983664-1722906978983275411-n" border="0"></a> */}