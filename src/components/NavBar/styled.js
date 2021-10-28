import styled from 'styled-components'

const Container = styled.div`
    height:30px;
    padding:20px;
    background-color:#000;
    color:#fff;

    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo{
        color:#F00;
    }

    nav {
        ul{
            display:flex;
            justify-content:center;
            align-items:center;

            li{
                padding:0 20px;
                list-style:none;
            }
        }
    }

`

export { Container }