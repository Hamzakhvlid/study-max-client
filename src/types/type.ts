interface InputFieldProps {
  placeholder: string;
  type: "email" | "text" | "password";
  borderColor?: string;
  id: string;
  label: string;
}

interface ButtonProps {
  text: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  typeofButton: "submit" | "reset" | "button";
  borderRadius?: string
  width?: string
  padding? : string
}
interface FormProps{
    type: string
}
interface CategoriesCardProps{
  title: string
}

type CommentCardProps = {
  username: string,
  comment: string,
  profilepic?: string,
}

type SubjectLevel = 'Higher' | 'Ordinary';
type Subject = {
  _id: string;
  name: string;
  icon: string;
  levels: SubjectLevel[];
  exam: string;
};