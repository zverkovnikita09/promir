import logoImg from "../assets/images/logo/logo.png";
import logoText from "../assets/images/logo/logotext.png";

const MyHeader = () => {
    return (
        <header>
            <div className='logo'>
                <img className='logo__icon' src={logoImg} alt="logo" />
                <img className='logo__text' src={logoText} alt="logotext" />
            </div>
        </header>
    );
};

export default MyHeader;