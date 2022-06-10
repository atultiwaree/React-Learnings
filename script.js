function OurApp() {
    return (
    <> 
        <OurHeader />
        <TimeArea />
        <ul>
          <Students name = "Atul" work = "Xvideos.com" year = "2020" />
          <Students name = "Dixit" work = "PornHub.com" year = "2021"/>
          <Students name = "Faiz" work = "Xnxx.com" year = "2022"/>
        </ul>
        <Footer />
    </>
    )
}

function Students(props) {
     return (
       <>
       <li>I'm  {props.name} Working at {props.work} year of joining year {props.year}</li>
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