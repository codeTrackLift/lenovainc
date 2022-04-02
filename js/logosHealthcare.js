const logosHealthcare = `
    <a href="https://ariahealth.com/" target="_blank" class="boxShadowBig"
        style="color:dimgray;background-color:aquamarine;border-radius: 50% 20% / 10% 40%;">Aria<br><span
            class="text-white">Health</span></a>
    <a href="https://www.hamiltonhealthcarecenter.org/" target="_blank"
        style="color:black;background-color:white;border-top:12px double steelblue;border-bottom:12px double darkkhaki;border-radius:50%;">Hamilton<br>HealthCare</a>
    <a href="https://www.virtua.org/locations/hospital-virtua-our-lady-of-lourdes" target="_blank"
        style="background-color:steelblue;color:white;border-radius:25% 0 25% 0;border-left:12px groove khaki;border-right:12px groove khaki;">Our
        Lady of<br>Lourdes Hospital</a>
    <a href="https://www.rwjbh.org/rwj-university-hospital-new-brunswick/" target="_blank"
        class='boxShadowBig' style="background-color:silver;color:steelblue;border-radius:4px;">R<span
            style="font-size:1rem;">obert</span>W<span style="font-size:1rem;">ood</span>J<span
            style="font-size:1rem;">ohnson</span><br><span
            style="font-size: 1rem; background-color:gold;padding:0.5rem 1.5rem;margin:0 -1.5rem;">University
            Hospital</span></a>
`;

const injectLogosHealthcare = () => logosScroll.innerHTML += logosHealthcare;