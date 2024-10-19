import './commentcard.scss'
export default function CommentCard({
    username,
    comment,
    profilepic
}:CommentCardProps){
    return(
        <div className="commentcard">
            <div>
                <img className='commentcard-profile' src={profilepic} alt="profile" />
            </div>
            <div className='commentcard-box'>
                <h1 className='commentcard-username'>{username}</h1>
                <p>{comment}</p>
            </div>
        </div>
    )
}