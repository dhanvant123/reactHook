import {useParams, useLocation, useNavigate} from 'react-router-dom';

function CourseDetails(){
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    const course= location.state
    console.log(course);
    return(
        <>
            <h2>{course} - {id}</h2>
            <button onClick={()=>navigate(-1)}>&larr;</button>
        </>
    )
}export default CourseDetails;