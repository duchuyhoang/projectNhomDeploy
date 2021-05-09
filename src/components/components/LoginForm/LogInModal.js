import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Modal } from "./LoginForm";

const useLogInStyle = makeStyles((theme) => ({
    root: {
        height:"100%",
        width: "100%",
        padding:0,
        margin: 0,
    }
}))


const Container = styled.div`
    align-items: center;
    font-family: ${props => props.theme.typography.fontFamily};
    position:absolute;
    z-index: 2001;
    width: 100%;
    height: 100%;
    display: inline-block;

`
const LogInText = styled.a`
    color: ${props => props.theme.palette.primary.main};
    font-size: 30px;
    text-decoration: none;
    font-weight: 600;
    position:absolute;
    z-index: 2000;
`

export const LogInModal = ({ type,children ,...rest }) => {
    const logInStyle = useLogInStyle();

    const [showModal, setShowModal] = useState(true);

    const openModal = () => {
        setShowModal(prev => !prev)
    };
    
    return( 
        <div classes= {logInStyle}>
            <Container >
                <LogInText href="#" onClick ={openModal}>{children}</LogInText>
                <Modal showModal = {showModal} setShowModal = {setShowModal} ></Modal>
            </Container>
        </div>
    )

}