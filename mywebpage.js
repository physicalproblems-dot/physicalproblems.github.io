document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const iitJeeLink = document.getElementById('iit-jee-link');
    const content = document.getElementById('content');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        content.innerHTML = '<p>"Physics is the art of approximation" - Lev Landau</p>';
    });

    iitJeeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        content.innerHTML = `
            <ul>
                <li><a href="#" id="my-poetry-link">&#8594; My Poetry</a></li>
                <li>&#8594; Favorite One</li>
            </ul>
        `;

        const myPoetryLink = document.getElementById('my-poetry-link');
        myPoetryLink.addEventListener('click', (event) => {
            event.preventDefault();
            content.innerHTML = `
                <p>My Poetry PDFs:</p>
                <ul>
                    <li><a href="https://drive.google.com/file/d/1wXIK_3PoTWhUXNLef3cfmFfbf_Hb1t3J/view?usp=sharing" target="_blank">First Poetry PDF</a></li>
                    <li><a href="https://drive.google.com/file/d/1CreJwqvoiJiXA9b-mISuqxHxaz_qEsHb/view?usp=sharing" target="_blank">Second Poetry PDF</a></li>
                </ul>
            `;
        });
    });
});

