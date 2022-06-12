const useState = React.useState
const useEffect = React.useEffect


function OurApp() {
  const [pets, setPets] = useState([])
  //Only runs once when page renders
  // useEffect(function to run, when somthing get changes)
  useEffect(() => {
     if(localStorage.getItem("examplePetData")){
       setPets(JSON.parse(localStorage.getItem("examplePetData")))
     }
  }, [])
  
  //Run everytime when our pets changes
   useEffect(() => {
       localStorage.setItem("examplePetData", JSON.stringify(pets))
   }, [pets])
  
    return (
    <> 
        <OurHeader />
        <TimeArea />
        <LikeArea />
        <AddPetForm setPets = {setPets} />
        <ul>
 {pets.map(pet => <Pet setPets = {setPets} id = {pet.id} name = {pet.name} species = {pet.species} age = {pet.age} key = {pet.id} /> )}
        </ul>
        <Footer />
    </>
    )
}

function AddPetForm(props) {
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [age, setAge] = useState()
  
  handleSubmit = (e) => {
      e.preventDefault()
      props.setPets(prev => prev.concat({name , species , age , id : Date.now()}))
      setName("")
      setAge("")
      setSpecies("")
  }
  
  return (
    <form onSubmit = {handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value = {name} onChange = {e => setName(e.target.value)} placeholder="Name" />
        <input value = {species} onChange = {e => setSpecies(e.target.value)} placeholder="species" />
        <input value = {age} onChange = {e => setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

function LikeArea() {
  const [value, modifier] = useState(0)
  
  increaseHandler = () => {
       modifier( prev => prev + 1)
  }
  decreaseHandler = () => {
      modifier(prev => {
          if(prev > 0) {
              return prev - 1
          }
         return 0
      })
  }
     return (
       <>
           <button onClick = {increaseHandler}>Like</button>
           <button onClick = {decreaseHandler}>Dislike</button>
           <h1>Page Has Been Liked {value} Times</h1>
      </>
       
     )
}

function Pet(props) {
  function handleDelete() {
      props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
     return (
       <>
       <li>I'm  {props.name} a {props.work} of age {props.age}
         <button onClick = {handleDelete}> Delete </button>  
       </li>
       </>
     )
}

function OurHeader() {
   return (<h1 className = "special">Our Amazing React JSX App</h1>)
}
function TimeArea() {
   const [theTime, setTheTime] = useState(new Date().toLocaleString())
   
   useEffect(() => {
    const interVal = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
    return () => clearInterval(interVal)
   }, [])
  
   return <p>The Current time is {theTime}</p>
}
function Footer() {
   return (<small>Copyright Footer Text</small>)
}

ReactDOM.render(<OurApp />, document.querySelector('#app'));