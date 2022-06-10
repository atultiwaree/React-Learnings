function OurApp() {
    return (
    <> 
        <h1 className = "special">Our Amazing React JSX App</h1>
        <p>The Current time is {new Date().toLocaleString()}</p>
        <small>Copyright Footer Text</small>
    </>
    )
}
setInterval(() => {
ReactDOM.render(<OurApp />, document.querySelector('#app'));
}, 1000)