import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Course from "../../types/courses";
import "./Forms.css";
import { ButtonAcept, ButtonCancel } from "../../components/ButtonsForms";
import { useContext, useState } from "react";
import courseSchema from "../../validations/courseSchema";
import { useSubmitCourse } from "../../Hooks/useSubmitCourse";
import ThemeContext from "../../Context/ThemeContext";

function CreateCourse() {

  const {darkMode} = useContext(ThemeContext);

  const { register, handleSubmit, formState: { errors } , setValue } = useForm<Course>({
    resolver: zodResolver(courseSchema)
  });

  const [status, setStatus] = useState<boolean>(true);
  const toggleStatus = () => {
    setStatus(!status);
    if (status) {
      setValue('status', true)
    } else {
      setValue('status', false)
    }
  };
  

  const onSubmit = useSubmitCourse();

  return (
    <>

      <div className={`body-Form ${darkMode ? 'dark-mode' : ''}`}>
        <p>Add New Course</p>

        <form className={`Form-Style ${darkMode ? 'dark-mode' : ''}`} onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Course Name</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="error-message ">{errors.name.message}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="professor">Teacher’s Name</label>
            <input type="text" id="professor" {...register("professor")} />
            {errors.professor && (
              <span className="error-message"> {errors.professor.message}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="course_code"> Course Code</label>
            <input type="text" id="course_code" {...register("course_code")} />
            {errors.course_code && (
              <span className="error-message">{errors.course_code.message}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="classroom_number">Classroom Number</label>
            <input
              type="number"
              id="classroom_number"
              {...register("classroom_number")}
            />
            {errors.classroom_number && (
              <span className="error-message">{errors.classroom_number.message}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="status">Course Status</label>
            <label className="toggle">
              <input
                className="status"
                type="checkbox"
                {...register("status")}
                onChange={toggleStatus}
              />
              <span className="slider"></span>
            </label>
            {errors.status && (
              <span className="error-message">{errors.status.message}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="maximun_quota">Maximum Quota</label>
            <input
              type="number"
              id="maximun_quota"
              {...register("maximun_quota")}
            />
            {errors.maximun_quota && (
              <span className="error-message">{errors.maximun_quota.message}</span>
            )}
          </div>

       
          <div className="button-group">
            <ButtonCancel Title="Cancel"/>
            <ButtonAcept
              Title="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateCourse;
