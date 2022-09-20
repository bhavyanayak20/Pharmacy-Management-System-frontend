import React from 'react'
import styled from "styled-components";

import { Search,ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/icons-material";



const Container=styled.div`
height:60px;
background-color:lightblue;
`;

const Wrapper=styled.div`
padding:10px 10px;
display:flex;
  justify-content: space-between;

`;

 const Left=styled.div`
 flex:1
 display: flex;
 align-items: center;
 `;

const Language=styled.span`
font-size:14px;
cursor:pointer;
font-weight: bold;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 35px;
  padding: 0px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
`;


const Navbar = () => {
  return (
   <Container>
   <Wrapper> 
    <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{ color: "gray", fontSize: 16 }} />  
        </SearchContainer>
    </Left>
    <Center><Logo> MedPlus. </Logo>

    </Center>
    <Right>
        <MenuItem> ABOUT</MenuItem>
        <MenuItem> CONTACT</MenuItem>
    <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
    </Right>
   </Wrapper>
   </Container>
  );
};

export default Navbar; 