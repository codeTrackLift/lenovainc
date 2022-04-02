const logosOSD = `
    <a href="https://www.merck.com" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background-color:white;
            color:#00857c;
            border-radius:25% 12px 25% 12px;
            border:4px solid #00857c;
            font-size:2rem;
            line-height:1;
        ">
        MERCK<br><span style="color:white;font-size:1.25rem;">Biopharma</span>
    </a>

    <a href="https://www.bms.com/" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background-color:white;
            color:darkmagenta;
            border: 8px double darkmagenta;
            border-radius:50%;
            font-size:2rem;
            line-height: 1;
        ">
        BMS<br><span style="font-size:1.25rem;color:white;">R&D</span>
    </a>

    <a href="https://www.guardiandrug.com/" 
        target="_blank" 
        class='fst-italic boxShadowBig'
        style="
            background-color:white;
            color:navy;
            border:4px solid navy;
            border-radius:4px;
            line-height:1.1;
        ">
        <span style="font-size:2rem;">G</span><span style="font-size:1.25rem;">uardian</span> <br><span
        style="font-size:1rem;background-color: navy;color:white;padding:0.5rem 1rem;margin:0 -1.75rem;">Drug
        Company</span>
    </a>

    <a href="https://churchdwight.com/" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background-color:crimson;
            color:white;
            border-radius:50%;
            border:12px double white;
            line-height:1;
            letter-spacing:-3px;
        ">
        CHURCH<br>&<br>DWIGHT
    </a>

    <a href="https://www.roche.com/innovation/structure/genentech" 
        target="_blank" 
        class="textShadowBlack"
        style="
            border-left:12px double navy;
            border-right:12px double navy;
            color:navy;
            border-radius:25%;
        ">
        Roche<br>Genentech
    </a>

    <a href="https://www.renpharm.com/" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background:linear-gradient(navy, green);
            color:white;
            border-radius:12px;
        ">
        Renaissance<br>Pharma
    </a>

    <a href="https://www.cookgroup.com/cook-group-completes-sale-of-cook-pharmica/" 
        target="_blank"
        class='boxShadowBig textShadowBlack' 
        style="
            color:white;
            background-color:crimson
        ">
        Cook<br><span style="font-size:1rem;background-color:maroon;padding: 0.25rem 0.25rem 1rem 1.5rem;margin:0 -1.5rem -1rem -1.5rem;">Pharmica</span>
    </a>
`;

const injectLogosOSD = () => logosScroll.innerHTML += logosOSD;