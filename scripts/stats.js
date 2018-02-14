var _paq = _paq || []
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])
;(function() {
  var u = '//vps511859.ovh.net/staats/'
  _paq.push(['setTrackerUrl', u + 'piwik.php'])
  _paq.push(['setSiteId', '3'])
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0]
  g.type = 'text/javascript'
  g.async = true
  g.defer = true
  g.src = u + 'piwik.js'
  s.parentNode.insertBefore(g, s)
})()
