
export class Animacoes {
  bubbles() {
    for (let x = 1; x <= $('.circle').length; x++) {
      $('.circle:nth-child(' + x + ')');
      $('.circle:nth-child(' + x + ')').css({
        top: parseInt((Math.random() * (100 - 0) + 0).toString()) + '%',
        left: parseInt((Math.random() * (100 - 0) + 0).toString()) + '%'
      })
      
      setTimeout(() => {
        let a = (Math.random() * (150 - (-50)) + (-50));
        let b = (Math.random() * (150 - (-50)) + (-50));

        $('.circle:nth-child(' + x + ')').css({
          top: parseInt(a.toString()) + '%',
          left: parseInt(b.toString()) + '%'
        })
      }, 100);
      
      setInterval(() => {
        let a = (Math.random() * (150 - (-50)) + (-50));
        let b = (Math.random() * (150 - (-50)) + (-50));

        $('.circle:nth-child(' + x + ')').css({
          top: parseInt(a.toString()) + '%',
          left: parseInt(b.toString()) + '%'
        })
      }, 10000);
    }

  }

}