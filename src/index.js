const elId = id => {
  if (document.querySelector(`#${id}`)) {
    return id
  }

  const main = document.createElement('div')
  main.id = id
  document.body.appendChild(main)
  return id
}

const app = new Vue({
  el: elId('app'),
  data: {
    message: 'Hello Vue!'
  }
})
