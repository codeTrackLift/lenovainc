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
    </a><a href='#' style='box-shadow:none;'></a>

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
    </a><a href='#' style='box-shadow:none;'></a>

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
        <span style="font-size:2rem;">G</span><span style="font-size:1.25rem;">uardian</span> <br><span style="font-size:1rem;background-color: navy;color:white;padding:0.5rem 1rem;margin:0 -1.75rem;">Drug
        Company</span>
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://churchdwight.com/" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background-color:crimson;
            color:white;
            border-radius:50%;
            border:12px double white;
            line-height:0.9;
            letter-spacing:-3px;
        ">
        CHURCH<br><span style='font-size:1rem;'>&</span><span><br>DWIGHT
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.roche.com/innovation/structure/genentech" 
        target="_blank" 
        style="
            border-left:12px ridge white;
            border-right:12px groove white;
            color:white;
            background-color:navy;
            border-radius:0 25% 0 25%;
            font-weight: normal;
            line-height: 1.2;
        ">
        Roche<br>Genentech
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.renpharm.com/" 
        target="_blank" 
        class="boxShadowBig textShadowBlack"
        style="
            background:black;
            color:white;
            line-height:1;
            font-weight:normal;
        ">
        <span style='background:linear-gradient(navy, green);border-radius:50%'>Re</span>na<span style='background:linear-gradient(navy, green);border-radius:50%'>iss</span>an<span style='background:linear-gradient(navy, green);border-radius:50%'>ce</span><br><span style='background:linear-gradient(navy, green);border-radius:50%'>Ph</span>ar<span style='background:linear-gradient(navy, green);border-radius:50%'>ma</span>
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.cookgroup.com/cook-group-completes-sale-of-cook-pharmica/" 
        target="_blank"
        class='boxShadowBig textShadowBlack' 
        style="
            color:white;
            background-color:crimson;
            line-height:1.2;
        ">
        Cook<br><span style="font-size:1rem;background-color:maroon;padding: 0.25rem 0.25rem 1rem 1.5rem;margin:0 -1.5rem -1rem -1.5rem;">Pharmica</span>
    </a><a href='#' style='box-shadow:none;'></a>
`;

const injectLogosOSD = () => logosScroll.innerHTML += logosOSD;