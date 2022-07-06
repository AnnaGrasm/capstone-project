import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

export default function InspirationImg({inspirationImg1, inspirationImg2, inspirationImg3}) {
  return (
    <ImageContainer>
      <Carousel showStatus={false} centerMode={true} width="300px" showThumbs={false} >
        <img src={inspirationImg1} alt="first inspiration" style={{border: 'black solid 3px'}} />
        <img src={inspirationImg2} alt="second inspiration" style={{border: 'black solid 3px'}} />
        <img src={inspirationImg3} alt="third inspiration" style={{border: 'black solid 3px'}} />
      </Carousel>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  margin: auto;

 
  img {
    border-radius: 10%;
    aspect-ratio: 1 / 1;
    margin-bottom: 2.5rem;
    max-width: 200px;
    min-width: 200px;
    
    @media (min-width: 500px) {
    max-width: 230px;
    min-width: 230px;
  }
  }

  
`;
