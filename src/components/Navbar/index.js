import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo,NavItem,NavLinks,NavMenu,MobileIcon } from './NavbarElement'


export default function Navbar() {
    return ( 
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="">Talha</NavLogo>
                <MobileIcon>
                    <FaBars/>
                    
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}