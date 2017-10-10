<script>
  export default {
    render() {
      return null
    }
  }
</script>

<style>
  @import url('../../shared-styles.css');
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-thin.woff2') format('woff2'),
      url('assets/overpass/overpass-thin.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-light.woff2') format('woff2'),
      url('assets/overpass/overpass-light.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url('assets/overpass/overpass-semibold.woff2') format('woff2'),
      url('assets/overpass/overpass-semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    @apply --text-normal;
    font-family: overpass, sans-serif;
    color: var(--grey700);
    background: #eef7f8;
  }
  button,
  select,
  input,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  .text-content a,
  .text-content abbr {
    position: relative;
    text-decoration: none;
  }
  .text-content a:after,
  .text-content abbr:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.12em;
    border-color: inherit;
    border-bottom-width: 0.05em;
    border-bottom-style: solid;
  }
  .text-content abbr:after {
    border-bottom-style: dotted;
  }
  body,
  a,
  button,
  select,
  input {
    color: inherit;
  }
  strong,
  b {
    font-weight: 600;
  }
  body,
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
</style>
