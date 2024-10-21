export default function Student(props){
    console.log(props.sname);
    
    return(
        <>
        <table className="table table-bordered">
            <tr>
                <td>Name</td>
                <td>{props?.sname}</td>
            </tr>
            <tr>
                <td>Course</td>
                <td>{props?.course}</td>
            </tr>
        </table>
        </>
    )
}