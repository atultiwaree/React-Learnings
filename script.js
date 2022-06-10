function OurApp() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Our Amazing App"),
    React.createElement("p", null, `The Current Time is ${new Date().toLocaleString()}`),
    React.createElement("small", null, "Copy right footer Text")
  ])
}

setInterval(() => {
  ReactDOM.render(React.createElement(OurApp), document.querySelector('#app'))
}, 1000)