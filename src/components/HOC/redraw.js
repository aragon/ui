import React from 'react'

// Higher-order component for re-rendering
const redraw = (Component, delay) => {
  return class extends React.Component {
    static displayName = `Redraw(${Component.displayName ||
      Component.name ||
      'Component'})`
    componentDidMount() {
      this.raf = null
      this.lastDraw = Date.now()
      this.draw()
    }
    componentWillUnmount() {
      this.raf && cancelAnimationFrame(this.raf)
    }
    draw = () => {
      this.raf = requestAnimationFrame(this.draw)

      const now = Date.now()
      const delta = now - this.lastDraw
      if (delta > delay) {
        this.forceUpdate()
        this.lastDraw = now - delta % delay
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export default redraw
