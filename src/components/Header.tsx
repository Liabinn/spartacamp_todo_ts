import styled from 'styled-components'

function Header() {
  return (
    <StTitle>Habin's Todo List</StTitle>
  )
}

export default Header;

const StTitle = styled.h1`
  font-size: 3rem;
  text-shadow: 0.1rem 0.1rem 0.1rem #03A9F4;
  padding: 2rem;
`