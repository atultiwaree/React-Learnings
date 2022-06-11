const useState = React.useState

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

function OurApp() {
    return (
    <> 
        <OurHeader />
        <LikeArea />
        <TimeArea />
       
        <ul>
 {pets.map(pet => <Pet name = {pet.name} species = {pet.species} age = {pet.age} key = {pet.id} /> )}
        </ul>
        <Footer />
    </>
    )
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0)
  function increaseLikeHandler() {
       setLikeCount(function(prev){
          return prev + 1
       })
  }
  
  function decreaseLikeHandler() {
       setLikeCount(prev => {
           if(prev > 0) {
              return prev - 1;
           } 
         
         return 0;
       })
  }

    return (
        <>
        <button onClick = {increaseLikeHandler}>Increase Likes</button>
        <button onClick = {decreaseLikeHandler}>Decrease Likes</button>
        <h2>this page has been liked {likeCount} times</h2>
        </>
    )
}



function Pet(props) {
     return (
       <>
       <li>I'm  {props.name} a {props.work} of age {props.age}</li>
       </>
     )
}

function OurHeader() {
   return (<h1 className = "special">Our Amazing React JSX App</h1>)
}
function TimeArea() {
   const [theTime, setTheTime] = useState(new Date().toLocaleString())
   setTimeout(function() {
      setTheTime(new Date().toLocaleString())
   },5000)
   return <p>The Current time is {theTime}</p>
}
function Footer() {
   return (<small>Copyright Footer Text</small>)
}

ReactDOM.render(<OurApp />, document.querySelector('#app'));
