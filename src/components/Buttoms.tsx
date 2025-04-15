
import { Link } from 'react-router-dom'
import useDelete from '../Hooks/useDelete';


const Buttoms = ({ id ,refreshCourses}: { id: string, refreshCourses: () => void }) => {
  
  const handleClick = () => {
    useDelete(id, refreshCourses);
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <Link to={`/view/${id}`}>
          <button id='viewBtn' title='view' className="hover:bg-sky-700 text-sm bg-sky-600 text-white px-2 py-1 rounded-lg shadow-lg">
            View
          </button>
        </Link>
        <Link to={`/edit/${id}`}>
          <button id='editBtn' className="hover:bg-cyan-600 text-sm bg-cyan-800 text-white px-2 py-1 rounded-lg shadow-lg">
            Edit
          </button>
        </Link>
        <button id='deleteBtn' title='delete' onClick={handleClick} className="hover:bg-red-700 text-sm bg-neutral-600 text-white px-2 py-1 rounded-lg shadow-lg">
          Delete
        </button>
      </div>
    </>
  );
};

export default Buttoms;
