function OurApp() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", { className: "special" }, "Our Amazing React JSX App"), /*#__PURE__*/
    React.createElement("p", null, "The Current time is ", new Date().toLocaleString()), /*#__PURE__*/
    React.createElement("small", null, "Copyright Footer Text")));


}
setInterval(() => {
  ReactDOM.render( /*#__PURE__*/React.createElement(OurApp, null), document.querySelector('#app'));
}, 1000);