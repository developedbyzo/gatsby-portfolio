import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavLink, NavMenu, NavItem} from "./NavbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)

    const navChange = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        navChange()
        window.addEventListener("scroll", navChange)
    }, [])

    return (
        <>
            <IconContext.Provider 
            value={{color: "417505"}}
            >
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            developedByZo
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar