import React from 'react'

function Header() {
    return (
        <div class="flex justify-center">
            <nav>
                <div>
                    <a href="/"></a>
                </div>
            </nav>
            <ul>
                <li>
                    <a href="#">
                        <span>
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            Blog
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            About
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header
