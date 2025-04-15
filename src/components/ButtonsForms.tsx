import { useNavigate } from "react-router-dom";
import "./ButtonsForms.css";

export const ButtonAcept = ({
  Title,
}: {
  Title: string;
}) => {
  return (
    <>
      <button className="sendButton" type="submit">
        {Title}
      </button>
    </>
  );
};

export const ButtonCancel = ({
  Title,
}: {
  Title: string;
}) => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate("/");
  };
  return (
    <>
      <button className="cancelButton" type="button" onClick={onCancel}>
        {Title}
      </button>
    </>
  );
};
