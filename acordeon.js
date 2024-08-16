document.addEventListener('DOMContentLoaded', () => {
    const acordeonOis = document.querySelectorAll('.acordeon .oi');
    
    acordeonOis.forEach(oi => {
        oi.addEventListener('click', () => {
            const acordeon = oi.parentElement;
            const isOpen = acordeon.classList.contains('open');
            
            
            document.querySelectorAll('.acordeon').forEach(sec => sec.classList.remove('open'));
            
            
            if (!isOpen) {
                acordeon.classList.add('open');
            }
        });
    });
});