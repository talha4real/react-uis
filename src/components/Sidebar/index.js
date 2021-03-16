import React from 'react'
import {SidebarContainer ,Icon,CloseIcon , SideBtnWrap, SidebarRoute,SidebarLink,SidebarWrapper,SidebarMenu} from './SidebarElements'

export default function index({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen = {isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>
                        Resume
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
