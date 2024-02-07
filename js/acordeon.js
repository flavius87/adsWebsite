document.addEventListener('DOMContentLoaded', function () {
    
    function manejarAcordeon(e, elementos) {
        e.stopPropagation();
        const activo = this.classList.contains('activa');

        elementos.forEach(item => item.classList.remove('activa'));

        if (!activo) {
            this.classList.add('activa');
        }
    }

    const acordeonSimpleItems = document.querySelectorAll('.acordeon li');
    acordeonSimpleItems.forEach(elemento => {
        elemento.addEventListener('click', function(e) {
            manejarAcordeon.call(this, e, acordeonSimpleItems);
        });
    });

    const acordeonConSubItems = document.querySelectorAll('.acordeon-2 .acordeon__items');
    acordeonConSubItems.forEach(elemento => {
        elemento.addEventListener('click', function(e) {
            manejarAcordeon.call(this, e, acordeonConSubItems);
        });
    });

    const acordeonSub = document.querySelectorAll('.acordeon-2 .acordeon__item');
    acordeonSub.forEach(elemento => {
        elemento.addEventListener('click', function(e) {
            manejarAcordeon.call(this, e, acordeonSub);
        });
    });
});
