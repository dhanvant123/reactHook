import {useNavigate, useLocation} from 'react-router-dom'
import './custom.css'

function Course(){
    const navigate = useNavigate()
    const location = useLocation();
    const courses = [
            {name: "React", id: 1},
            {name: "SpringBoot", id:2},
            {name: "Angular", id:3},
            {name: "Vanilla JS", id:4},
            {name: "The Legendary C", id:5}
        ]
    function handleClick(e){
        console.log(`${location.pathname}/${e.currentTarget.dataset.id}`)
        navigate(`${location.pathname}/${e.currentTarget.dataset.id}`, {state: e.currentTarget.dataset.name})
    }
    return(
        <>
            <h2>Courses</h2>
            <div className="course-container">
                {courses.map((c)=>
                <div onClick={handleClick} data-id={c.id} data-name={c.name} key={c.id} className="course-card">
                    <h3>{c.name}</h3>
                    <h3>{c.id}</h3>
                </div>)}
            </div>
        </>
    )
}export default Course;