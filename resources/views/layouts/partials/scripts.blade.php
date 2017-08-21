<script>
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WZKSL7P');
</script>

<noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZKSL7P"
    height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
</noscript>

<script>
    window.CR = window.CR || {};
    window.dataLayer = window.dataLayer || [];
    CR.baseContext = {};
</script>

<script>window.jQuery || document.write('<script src="{{ asset('/js/vendor/jquery/dist/jquery.min.js')}} "><\/script>')</script>
<script src="{{ asset('/js/vendor/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('/js/vendor/autosize/dist/autosize.min.js')}} "></script>
<script src="{{ asset('/js/common.js')}} "></script>
<script src="{{ asset('/js/index.js')}} "></script>
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    window.NREUM || (NREUM = {});
    NREUM.info = {
        "beacon": "bam.nr-data.net",
        "licenseKey": "11107010c5",
        "applicationID": "6863782",
        "transactionName": "YlRRNUAHW0UHV0VQXVsecgJGD1pYSUBeSQ==",
        "queueTime": 3,
        "applicationTime": 264,
        "atts": "ThNSQwgdSEs=",
        "errorBeacon": "bam.nr-data.net",
        "agent": ""
    };

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga_uniqtrack');
    ga_uniqtrack('create', 'UA-60144933-23', 'auto');
    ga_uniqtrack('set', 'pageview');
    ga_uniqtrack('set', 'dimension1', 'poh');
    ga_uniqtrack('set', 'dimension3', 'true');
    ga_uniqtrack('send', {hitType: 'pageview', page: 'id=poh hmn=true', title: 'id=poh hmn=true'});
</script>
<script src="{{ asset('/js/common2.js') }}"></script>