<footer class="footer section section_bg">
  <div class="wrapper">
    <div class="footer__row">
      <div class="footer__logo">
        <svg><use xlink:href="assets/sprites/sprite-mono.svg#logo"></use></svg>
      </div>
      <div class="footer__social">
        <div class="footer__social-row">
          <a href="#" class="footer__social-item">
            <svg><use xlink:href="assets/sprites/sprite-mono.svg#telegram"></use></svg>
          </a>
          <a href="#" class="footer__social-item">
            <svg><use xlink:href="assets/sprites/sprite-mono.svg#whatsapp"></use></svg>
          </a>
          <a href="#" class="footer__social-item">
            <svg><use xlink:href="assets/sprites/sprite-mono.svg#email"></use></svg>
          </a>
        </div>
      </div>
      <div class="footer__content">
        <nav class="footer__nav">
          <a href="#about" class="footer__nav-link js-anchor">Для кого</a>
          <a href="#program" class="footer__nav-link js-anchor">Программа</a>
          <a href="#teachers" class="footer__nav-link js-anchor">Профессора</a>
          <a href="#reviews" class="footer__nav-link js-anchor">Отзывы</a>
          <a href="#rates" class="footer__nav-link js-anchor">Тарифы</a>
        </nav>
        <div class="footer__links">
          <a href="/policy.pdf" class="footer__link" target="_blank">Политика обработки персональных данных</a>
          <a href="/oferta.pdf" class="footer__link" target="_blank">Публичная оферта</a>
        </div>
      </div>
    </div>
  </div>
</footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.4/swiper-bundle.js"></script>
  <script src="assets/js/index.js?v=5"></script>

    <script>
      function getGet(name) {
        var s = window.location.search
        s = s.match(new RegExp(name + '=([^&amp;=]+)'))
        return s ? decodeURI(s[1]) : false
      }

      function setGet(nodes, param) {
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].value = getGet(param)
        }
      }

      document.addEventListener('DOMContentLoaded', () => {
        var campaigns = document.querySelectorAll(
          '[name="formParams[dealCustomFields][1275286]"]'
        );
        var sbIds = document.querySelectorAll('[name="formParams[userCustomFields][661603]"]');

        var e1 = document.querySelectorAll('[name="formParams[userCustomFields][762071]"]');
        var e2 = document.querySelectorAll('[name="formParams[userCustomFields][762072]"]');
        var e3 = document.querySelectorAll('[name="formParams[userCustomFields][762075]"]');
        var e4 = document.querySelectorAll('[name="formParams[userCustomFields][762076]"]');
        var e5 = document.querySelectorAll('[name="formParams[userCustomFields][1062780]"]');
        var e6 = document.querySelectorAll('[name="formParams[userCustomFields][1275265]"]');



        setGet(campaigns, 'utm_campaign');
        setGet(sbIds, 'sid');
        setGet(e1, 'utm_source');
        setGet(e2, 'utm_medium');
        setGet(e3, 'utm_campaign');
        setGet(e4, 'utm_content');
        setGet(e5, 'sbkurs');
        setGet(e6, 'sbmar');

        var utmLinks = document.querySelectorAll('.js-with-utm')
        var getString = window.location.search
        for (var i = 0; i < utmLinks.length; i++) {
          const href = utmLinks[i].getAttribute('href') + getString
          utmLinks[i].setAttribute('href', href)
        }
      })

    </script>

</body>
</html>
