function OurApp() {
    return (
    <> 
        <OurHeader />
        <TimeArea />
        <Footer />
    </>
    )
}

function OurHeader() {
   return (<h1 className = "special">Our Amazing React JSX App</h1>)
}
function TimeArea() {
   return (<p>The Current time is {new Date().toLocaleString()}</p>)
}
function Footer() {
   return (<small>Copyright Footer Text</small>)
}

setInterval(() => {
ReactDOM.render(<OurApp />, document.querySelector('#app'));
}, 1000)