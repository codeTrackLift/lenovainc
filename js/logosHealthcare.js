const logosHealthcare = `
    <a href="https://ariahealth.com/" 
        target="_blank" 
        class="boxShadowBig"
        style="
            color:dimgray;
            background-color:aquamarine;
            border-radius: 50% 20% / 10% 40%;
            line-height: 1;
        ">
        Aria<br><span class="text-white" style='font-size:1rem'>Health</span>
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.hamiltonhealthcarecenter.org/" 
        target="_blank"
        style="
            color:black;
            background-color:white;
            border-top:12px double steelblue;
            border-bottom:12px double darkkhaki;
            border-radius:50%;
            line-height:1;
        ">
        Hamilton<br><span style='font-size:1.2rem'>HealthCare</span>
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.virtua.org/locations/hospital-virtua-our-lady-of-lourdes" 
        target="_blank"
        class="boxShadowBig"
        style="
            background-color:steelblue;
            color:white;
            border-radius:25% 0 25% 0;
            border-left:12px groove khaki;
            border-right:12px groove khaki;
            line-height:1;
            font-size:1.25rem;
        ">
        <span style='font-weight:lighter;font-size:1rem;'>Our</span> Lady <span style='font-weight:lighter;font-size:1rem;'>of</span><br>Lourdes<br>Hospital
    </a><a href='#' style='box-shadow:none;'></a>

    <a href="https://www.rwjbh.org/rwj-university-hospital-new-brunswick/" 
        target="_blank"
        class='boxShadowBig' 
        style="
            background-color:silver;
            color:steelblue;
            border-radius:4px;
            line-height:1;
        ">
        R<span style="font-size:0.75rem;">obert</span>W<span style="font-size:0.75rem;">ood</span>J<span style="font-size:0.75rem;">ohnson</span><br><span style="font-size: 1rem; background-color:gold;padding:0.25rem;">University Hospital</span>
    </a><a href='#' style='box-shadow:none;'></a>
`;

const injectLogosHealthcare = () => logosScroll.innerHTML += logosHealthcare;