import styled from "styled-components";


export const CheckoutContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;

`

export const FormContainer = styled.form`



`

export const ProductContainer = styled.form`

`

export const AddresContainer = styled.form`
    display:flex;
    gap: 11px;
    margin-top: 15px;
    padding: 40px;
    background: ${(props) => props.theme['base-card']};

    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`