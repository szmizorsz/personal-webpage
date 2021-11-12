import React from 'react'

function Header() {
    return (
        <div class="flex justify-center pt-14 pb-14">
            <nav>
                <div>
                    <a href="/">
                        <h6 class="text-2xl">Szabolcs Szentes</h6>
                    </a>
                </div>
            </nav>
            <div>
                <a href="#" class="mr-10">
                    <span>
                        Projects
                    </span>
                </a>
                <a href="#" class="mr-10">
                    <span>
                        Blog
                    </span>
                </a>
                <a href="#">
                    <span>
                        About
                    </span>
                </a>

            </div>
        </div>
    )
}

export default Header
