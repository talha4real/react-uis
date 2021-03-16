import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav,NavbarContainer, NavLogo,NavItem,NavLinks,NavMenu,MobileIcon,NavBtn,NavBtnLink } from './NavbarElement'


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
                    <NavItem>
                        <NavLinks to="resume">
                            Resume
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="portfolio">
                            Portfolio
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="blog">
                            Blog
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="contact">
                            Contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" >
                            Sign In
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}