import styled from 'styled-components';

export default function DesignerLink({designer, designerURL}) {
  return (
    <Link href={designerURL} target="_blank" rel="noreferrer">
      Designed by <span>{designer}</span>
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none ;
  color: black;
  padding: 0 1rem;

  
  span {
    font-weight: 700;
    font-size: 1rem;
    text-decoration: underline;
  }

`;
