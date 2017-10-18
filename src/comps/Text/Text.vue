<script>
  const tag = level => (
    level ? `h${Math.max(1, Math.min(6, level))}` : 'p'
  )
  export default {
    functional: true,
    props: {
      spaced: {
        type: Boolean,
        required: false,
      },
      heading: {
        type: Number,
        required: false,
      },
    },
    render(
      createElement,
      {
        data,
        props: {
          spaced,
          heading,
        },
        children,
        $style,
      }
    ) {
      const classes = {
        [$style.text]: true,
        [$style.spaced]: spaced,
      }
      if (data.class) {
        classes[data.class] = true
      }
      return createElement(tag(heading), { class: classes }, children)
    }
  }
</script>

<style module>
  @import '../../shared-styles.css';
  .text {
    color: var(--grey500);
  }
  .spaced {
    margin: 20px 0;
  }
</style>
