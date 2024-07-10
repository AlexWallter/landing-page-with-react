import {useState} from "react"
import data from "../data/testimonials.json"
import CircularNav from "./CircularNav"

export default function Testimonial() {
    const user = data.testimonials
    const [currentComment, setCurrentComment] = useState(0);
    
    const getData = (data) =>{
        setCurrentComment(data)
    }

    return (
    <>
        <div className="testimonial-container flex">
            <h1 className="u-bold-font testimonial-title">What they’ve said</h1>
            <div className="testimonial-mobile">
                <div className="testimonial__user-container">
                    <img src={`${user[currentComment].avatar}`} 
                         alt="user image" 
                         className="testimonial-avatar"/>
                    <p className="user-name u-bold-font">{user[currentComment].name}</p>
                    <p className="user-comment">{user[currentComment].comment}</p>
                </div>
                <div className="testimonial__nav">
                     <CircularNav num = {4}
                                  test = {getData}/>
                </div>

            
            </div>

            <div className="testimonial-larger">
                <div className="testimonial__user-container">
                    <img src={`${user[0].avatar}`} 
                         alt="user image" 
                         className="testimonial-avatar"/>
                    <p className="user-name u-bold-font">{user[0].name}</p>
                    <p className="user-comment">{user[0].comment}</p>
                </div>

                <div className="testimonial__user-container">
                    <img src={`${user[1].avatar}`} 
                         alt="user image" 
                         className="testimonial-avatar"/>
                    <p className="user-name u-bold-font">{user[1].name}</p>
                    <p className="user-comment">{user[1].comment}</p>
                </div>

                <div className="testimonial__user-container">
                    <img src={`${user[2].avatar}`} 
                         alt="user image" 
                         className="testimonial-avatar"/>
                    <p className="user-name u-bold-font">{user[2].name}</p>
                    <p className="user-comment">{user[2].comment}</p>
                </div>

                <div className="testimonial__user-container">
                    <img src={`${user[3].avatar}`} 
                         alt="user image" 
                         className="testimonial-avatar"/>
                    <p className="user-name u-bold-font">{user[3].name}</p>
                    <p className="user-comment">{user[3].comment}</p>
                </div>
            </div>
            <a href="/" className="u-orange-btn">Get started</a>
        </div>
    </>
    )
}