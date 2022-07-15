import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

export default function InspirationImg({inspirationImg1, inspirationImg2, inspirationImg3}) {
  return (
    <ImageContainer>
      <StyledCarousel>
        <img src={inspirationImg1} alt="first inspiration" style={{border: 'black solid 3px'}} />
        <img src={inspirationImg2} alt="second inspiration" style={{border: 'black solid 3px'}} />
        <img src={inspirationImg3} alt="third inspiration" style={{border: 'black solid 3px'}} />
      </StyledCarousel>
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
    max-width: 180px;
    min-width: 180px;

    @media (min-width: 600px) {
      max-width: 200px;
      min-width: 200px;
    }
  }
`;

const StyledCarousel = styled.div`
  display: flex;
  width: 300px;
  gap: 1rem;
  overflow-y: scroll;

  @media (min-width: 600px) {
    width: 500px;
  }
`;
