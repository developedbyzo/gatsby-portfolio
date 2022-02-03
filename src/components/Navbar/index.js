import React, {useState, useEffect} from 'react'
import { FaBars, Fatimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

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
            <IconContext.Provider value={{color: "141414"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            EXPLORE
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <Fatimes /> : <FaBars />}
                        </MobileIcon>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar