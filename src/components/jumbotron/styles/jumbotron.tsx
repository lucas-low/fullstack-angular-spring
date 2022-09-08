import styled from "styled-components/macro"

interface Props {
    flexDirection: any;
  }

export const Inner = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ flexDirection }) => flexDirection};
    max-width: 1100px;
    margin: auto;
    width: 100%;
    @media (max-width: 1000px) {
    flex-direction: column;
}
`
//flexDirection Adapting based on props
