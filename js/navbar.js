const navbar = document.getElementById('navbar');
const myNavbar = `
    <div class="container-fluid">
        <a class="navbar-brand d-none d-sm-block" href="../pages/welcome.html"><img
                src="../pics/lenovalogosmall.gif" style='height:1.5rem;' alt="LeNova Inc Logo, small."></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <img id='navBarIcon' src="../favicon.ico" alt="LeNova, Inc. icon." style="height:2rem;">
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll w-100 justify-content-evenly">
                <li id="nav-item">
                    <a id='nav-linkWelcome' class="nav-link d-block d-sm-none bg-transparent"
                        href="../pages/welcome.html">
                        <img id='menuLogo' src="../pics/lenovalogosmall.gif"
                            style='height:1.5rem;' alt="LeNova, Inc. Logo, small.">
                    </a>
                </li>
                <li class="nav-item">
                    <a id='nav-linkAbout' class="nav-link" href="../pages/company.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a id='nav-linkLeadership' class="nav-link" href="../pages/leadership.html">Leadership</a>
                </li>
                <li class="nav-item dropdown">
                    <a id='nav-linkExpertise' class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Expertise
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a id='dropdownOsd' class="dropdown-item nav-link" href="../pages/osd.html">Oral Solid Dosage</a></li>
                        <li><a id='dropdownHealthcare' class="dropdown-item nav-link" href="../pages/healthcare.html">Healthcare</a></li>
                        <li><a id='dropdownTBD2' class="dropdown-item nav-link" href="../pages/osd.html">Action 3</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a id='nav-linkContact' class="nav-link" href="../pages/contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
`;

const injectMyNavbar = () => navbar.innerHTML = myNavbar;
const setActiveNavlink = (navlink) => {
    document.getElementById(navlink).classList.add('active');
    document.getElementById(navlink).ariaCurrent = 'page';
}