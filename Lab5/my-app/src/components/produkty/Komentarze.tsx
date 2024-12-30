import React, { useState, useEffect } from "react";
import Komentarz from "./Komentarz";

interface User {
    id: number;
    username: string;
    fullName: string;
}

interface Comment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

function Komentarze() {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then(response => response.json())
            .then(data => setComments(data.comments))
            .catch(error => console.error("Error fetching comments:", error));
    }, []);

    return (
        <div>
            {comments.map(comment => (
                    <Komentarz
                        key={comment.id}
                id={comment.id}
                body={comment.body}
                postId={comment.postId}
                likes={comment.likes}
                user={comment.user}
    />
))}
    </div>
);
}

export default Komentarze;