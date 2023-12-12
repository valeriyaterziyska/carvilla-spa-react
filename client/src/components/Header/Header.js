import { Link } from "react-router-dom";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles['top-area']}>
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/">carvilla<span></span></Link>
                        </div>

                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="scroll active"><Link to="/">home</Link></li>
                                <li className="scroll"><Link to="/catalog">catalog</Link></li>
                                <li className="scroll"><Link to="/about-us">about us</Link></li>
                                <li className="scroll"><Link to="/login">login</Link></li>
                                <li className="scroll"><Link to="/register">register</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}