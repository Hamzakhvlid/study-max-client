import CommentCard from "../../atoms/commentcard/CommentCard";

export default function CommentsSection(){
    return (
        <section>
            <h1>Comments</h1>
            <CommentCard profilepic="/images/profile.jpg" comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis odit ratione qui cum earum animi at aliquam fugit temporibus officiis corrupti, ducimus vel rerum quam blanditiis ut, quis velit! Sequi?" username="Muhammad Ansar" />
            
        </section>
    )
}