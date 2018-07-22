import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-file-code-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Phillip Hall Jr </h1>
                <p>Innovative technology evangelist with a passion for technology, education & user experience. <br/>
                    <a target='_blank' href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a target='_blank' href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('exp')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('edu')}}>Education</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('pubs')}}>Publications</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
