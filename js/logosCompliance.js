const logosCompliance = `
    <a href="https://ispe.org/" 
        target="_blank" 
        class="textShadowBlack dropShadow"
        style="
            line-height: 1;
            border-radius: 50%;
            padding: 28px 14px;
            color:dimgray;
            font-size: 1.75rem;
            box-shadow:none;
            background: repeating-linear-gradient(
                135deg,
                transparent,
                transparent 12.5px,
                cornflowerblue 12.5px,
                cornflowerblue 25px
            );
        ">
        ISPE
    </a><a href='#' style='box-shadow:none;'></a>
    
    <a href="https://www.fda.gov/" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        US FDA
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.mfds.go.kr/eng/index.do" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        Ministry of Food and Drug Safety
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.ema.europa.eu/en" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        EU MEA
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.canada.ca/en/" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        Canada FDA
    </a><a href='#' style='box-shadow:none;'></a>


    <a href="https://www.iso.org/home.html" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        ISO
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.osha.gov/" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        OSHA
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.nfpa.org/" 
        target="_blank" 
        class="boxShadowBig"
        style="
            line-height: 1;
        ">
        NFPA
    </a><a href='#' style='box-shadow:none;'></a>

`;

const injectLogosCompliance = () => logosScroll.innerHTML += logosCompliance;