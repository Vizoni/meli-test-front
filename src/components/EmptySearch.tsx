import styled from "styled-components";

const Container = styled.div`
    margin: 10rem 1rem;
    align-self: center;
    
    span {
        width: 100%;
        height: 100%;
    }
`;

function EmptySearch () {
    return (
        <Container>
            <span>Busque por algum produto para que eles apareçam aqui!</span>
        </Container>
    )
}
export default EmptySearch;
