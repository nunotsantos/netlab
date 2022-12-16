import PropTypes from 'prop-types';
import Image from "next/image";
import SVGIMG from "../public/diamond.svg";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <Image src={SVGIMG} alt={""}/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dimension for NextJS 13</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license. Subsequently refactored<br />
                 by <a href="https://github.com/crenaz/">@crenaz</a> for <a href="https://reactjs.org/blog/2022/03/29/react-v18.html">React18</a> and <a href="https://nextjs.org/blog/next-13">Next13</a> with <a href="https://partytown.builder.io/">PartyTown</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
