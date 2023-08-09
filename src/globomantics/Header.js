import logo from './images/globomantics.png'


const Header = () =>{
    const logoStyles ={
        width:"160px",
        height:"100px",
    }
    const subtitleStyles={
        fontSize:"x-large",
        fontStyle:"italic",
        color:"coral"
    }
    return (
        <header className="row">
            <div className="col-md-5">
                <img src={logo} className="logo" alt="logo" style={logoStyles}/>
            </div>
            <div className="col-md-7 mt-5" style={subtitleStyles}>
                Providing houses all over the world
            </div>
        </header>
    )
}

export default Header;