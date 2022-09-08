import { Inner } from "./styles/jumbotron"


export default function Jumbotron({ children, flexDirection = "row", ...restProps }) {
    return (
        <Inner flexDirection={flexDirection}>
            <h2>test jumbo test</h2>
        </Inner>
    )
}