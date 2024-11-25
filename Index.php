<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="src/Image/LogoWeb.webp" type="image/webp" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    <link rel="stylesheet" href="/build/css/app.css" />

    <title>Web site</title>
</head>

<body>
    <header class="header">
        <div class="columnHeader">
            <div class="ImageLoco">
                <img src="src/Image/Logo.webp" alt="Logo.webp" />
            </div>

            <div class="DarkModeButton">
                <label class="ui-switch">
                    <input type="checkbox" class="DarkMode" />
                    <div class="slider">
                        <div class="circle"></div>
                    </div>
                </label>
            </div>

            <div class="mobile-menu">
                <img src="src/Image/mobile menu.webp" alt="Mobile Menu" />
            </div>

            <nav class="navegacion">
                <a href="#HomeInfo">Inicio</a>
                <a href="#about">Sobre mí</a>
                <a href="#Projects">Proyectos</a>
            </nav>

        </div>
    </header>

    <section class="HomeInfo" id="HomeInfo">
        <div class="DivImage">
            <img src="src/Image/Personal Website.webp" class="Image" alt="Image" />
        </div>

        <div class="Me">
            <h2>Fernando Mejía</h2>
            <h1>Front end developer/></h1>
            <p>
                Soy un desarrollador frontend comprometido con crear experiencias web atractivas y funcionales. Con una sólida comprensión de tecnologías modernas, estoy enfocado en mejorar y aprender constantemente para adaptarme a los retos que enfrente cada proyecto. Mi meta es ofrecer soluciones eficientes y trabajar con equipos que compartan la visión de mejorar el rendimiento y la experiencia de usuario en cada desarrollo.
            </p>

            <div class="Profileicons">
                <a href="/src/Downloads/CV Fernando Mejia .pdf" download>
                    <button class="CVbutton">Descarga mi CV</button>
                </a>

                <div class="GitHub">
                    <a href="https://github.com/FernadoCodeDev">
                        <svg>
                            <path
                                class="cls-1"
                                d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
                        </svg>
                    </a>
                    <h2>GitHub</h2>
                </div>

                <div class="Linkedin">
                    <a href="https://www.linkedin.com/in/fernando-mej%C3%ADa-717a1a335">
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="-143 145 512 512"
                            xml:space="preserve">
                            <g>
                                <path
                                    d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z" />
                                <rect x="-8.5" y="348.4" width="49.9" height="159.7" />
                                <path
                                    d="M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8
             c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z" />
                                <path
                                    d="M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7
                                C-15.1,316.2-3.4,328.4,14.7,328.4z" />
                            </g>
                        </svg>
                    </a>

                    <h2>Linkedin</h2>
                </div>
            </div>
        </div>
    </section>

    <?php
    include './includes/templades/about.php';
    ?>

    <?php
    include './includes/templades/Proyects.php';
    ?>

    <script src="build/js/bundle.min.js"></script>
</body>

</html>
