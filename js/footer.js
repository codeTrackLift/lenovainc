const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const myFooter = `
    <div class='text-center'>
        <p>Copyright &#169;
            ${currentYear}
            <img id='footerIcon' class='d-none d-sm-inline' src="../pics/logos/footerIcon.ico" alt="LeNova, Inc. Icon.">
            <span>LeNova, Inc.</span>
        </p>
    </div>
`;

const injectMyFooter = () => footer.innerHTML = myFooter;