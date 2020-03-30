
export class Animacoes {
    // Imagens de Linguagens de programação na sectio Sobre Nos
    bubbles() {
        let top = (Math.random() * (100 - 0) + 0);
        let left = (Math.random() * (150 - (-50)) + (-50));



        for (let x = 1; x <= $('.elemento-imagem').length; x++) {
            $('.elemento-imagem:nth-child(' + x + ')');
            $('.elemento-imagem:nth-child(' + x + ')').css({
                top: parseInt(top.toString()) + '%',
                left: parseInt(left.toString()) + '%'
            });
            setTimeout(() => {
                top = (Math.random() * (150 - 0) + 0);
                left = (Math.random() * (150 - (-50)) + (-50));

                $('.elemento-imagem:nth-child(' + x + ')').css({
                    top: parseInt(top.toString()) + '%',
                    left: parseInt(left.toString()) + '%'
                })
            }, 50);
            setInterval(() => {
                top = (Math.random() * (150 - 0) + 0);
                left = (Math.random() * (150 - (-50)) + (-50));

                $('.elemento-imagem:nth-child(' + x + ')').css({
                    top: parseInt(top.toString()) + '%',
                    left: parseInt(left.toString()) + '%'
                })
            }, 6000);
        }

    }


    // Scroll em ancoras da pagina 
    scrollToSection(section: string) {
        if ($(section).offset() !== undefined) {
            const header = $('.header').hasClass('fixed') ? 70 : 140;
            $('html, body').animate({
                scrollTop: $(section).offset().top - header
            }, '300');
        }
    };


}