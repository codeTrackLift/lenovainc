const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const myFooter = `
    <div class='text-center'>
        <p>Copyright &#169;
            ${currentYear}
            <button id='footerIconWrapper' class='d-none d-sm-inline'>
                <img id='footerIcon' class='dropShadow' src="../pics/logos/lenovaIcon.ico" alt="LeNova, Inc. Icon.">
            </button>
            <span>LeNova, Inc.</span>
        </p>
    </div>
`;

const injectMyFooter = () => footer.innerHTML = myFooter;

// <img id='footerIcon' class='d-none d-sm-inline dropShadow' src="../pics/logos/lenovaIcon.ico" alt="LeNova, Inc. Icon.">