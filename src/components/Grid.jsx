import { useLocation, useNavigate } from 'react-router-dom'
import '../Grid.css'


function GridPage(){
    let navigate = useNavigate();
    const location = useLocation();
    const data = location?.state || [];

    console.log(data);
    const editDetails=(item)=>{
        navigate('/form', { state: { student: item, type:'edit'} });
    }
    
    
    return(
        <table>
            <thead>
                <tr>
                    <th>First Name
                    </th>
                    <th>Second Name</th>
                    <th>Gender</th>
                    <th>Quota</th>
                    <th>Department</th>
                    <th>10th Marks</th>
                    <th>12th Marks</th>
                    <th>Joined Date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {data?.length === 0 ? (
                    <tr>
                    <td colSpan="9" style={{ textAlign: 'center', padding: '2rem' }}>
                        <div className="no-data-animation">
                        <span className="dot-animation">No student records found</span>
                        </div>
                    </td>
                    </tr>
                ) : (
                    data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.firstName}</td>
                        <td>{item.secondName}</td>
                        <td>{item.gender}</td>
                        <td>{item.quota}</td>
                        <td>{item.department}</td>
                        <td>{item.tenth}</td>
                        <td>{item.twelth}</td>
                        <td>{item.joinDate}</td>
                        <td>
                        <button className="edit-btn" onClick={() => editDetails(item)}>Edit</button>
                        <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                    ))
                )}
            </tbody>

            
        </table>
        
    )
}
export default GridPage