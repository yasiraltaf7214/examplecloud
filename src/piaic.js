import './App.css'
function Piaic(props) {
    return (
        <div className="App">
        <h1>Teacher Name: {props.teacherName} </h1>
        <h1>Program Name: {props.programName}</h1><hr/>
        </div>
    );
}

export default Piaic;
