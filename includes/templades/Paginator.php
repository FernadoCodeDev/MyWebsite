<div id="Paginator" class="StagesPager">
    <nav class="TabsPaginator">
        <button class="CurrentMenu" type="button" data-page="1"></button>
        <button type="button" data-page="2"></button>
        <button type="button" data-page="3"></button>
        <button type="button" data-page="4"></button>
        <button type="button" data-page="5"></button>
        <button type="button" data-page="6"></button>

    </nav>

   
    <div id="page-1" class="seccionMenu ShowMenu">
        <h2>Front-End</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

    <!-- DIV para Pizzas -->
    <div id="page-2" class="seccionMenu">
        <h2>Back-End</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

    <!-- DIV para Complementos -->
    <div id="page-3" class="seccionMenu">
        <h2>Bases de Datos</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

    <!-- DIV para Postres -->
    <div id="page-4" class="seccionMenu">
        <h2>Aprendiendo</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

    <div id="page-5" class="seccionMenu">
        <h2>Herramientas</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

    <div id="page-6" class="seccionMenu">
        <h2>Arquitecturas</h2>
        <div class="contenedor-anuncios">

        </div>
    </div>

</div>

<input type="radio">

<script>
    let menu = 1;

    document.addEventListener('DOMContentLoaded', function() {
        startPaginator();
    });

    const startPaginator = () => {
        MenuSection();
        TabsPaginator();
    }

    const MenuSection = () => {
        const MenuSecciones = document.querySelectorAll('.seccionMenu');
        MenuSecciones.forEach(Menuseccion => {
            Menuseccion.classList.remove('ShowMenu');
        });

        const MenuActual = document.querySelector(`#page-${menu}`);
        MenuActual.classList.add('ShowMenu');

        const MenuFormer = document.querySelector('.CurrentMenu');
        if (MenuFormer) {
            MenuFormer.classList.remove('CurrentMenu');
        }

        const Menu = document.querySelector(`[data-page="${menu}"]`);
        Menu.classList.add('CurrentMenu');
    }

    const TabsPaginator = () => {
        const buttons = document.querySelectorAll('.TabsPaginator button');
        buttons.forEach(bt => {
            bt.addEventListener('click', function(e) {
                menu = parseInt(e.target.dataset.page); 
                MenuSection();
            });
        });
    }
</script>