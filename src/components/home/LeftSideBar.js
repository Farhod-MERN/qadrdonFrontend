import React from 'react'
import { useState} from 'react'

const LeftSideBar = () => {

    const [like, setLike] = useState(false)
    const [follow, setFollow] = useState(true)
    const [post, setPost] = useState(true)
    
    const likeDisplay = like ? "none" : "block"
    const followDisplay = follow ? "none" : "block"
    const postDisplay = post ? "none" : "block"    
    return (
        <div className="mt-3 leftSideBar">
            {/* <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-success text-center"> Foydalanuchilar reytingi</h5>
            </div> */}
            <div className='sort'>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0 '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3itQvnA9uW1BCHG5qGqHWBgsHG49BSQPkg&usqp=CAU" width={33} alt="" />
                        <p className='m-0 p-0 ' style={{color:"green", fontWeight:"bold"}}>Eng ko'p Obunachi bo'yicha</p>
                        <span style={{cursor:"pointer"}} onClick={()=>{setLike(!like)}}  ><img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/06-512.png" width={30} alt="" /></span>
                    </div>
                    <div style={{display: `${likeDisplay}`}} className="px-2 border-top">
                        <ol style={{listStyle: "none"}}>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@shohruh_abdullayev</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@feruza_princess</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@bexruz_007</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@rano_sobirova</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/new/avatars/4.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@dina_mylady</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/new/avatars/17.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@kichkintoy_queen</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@studentka</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0 '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9I2zFVw-LPESXlnu2t2SiGztdJgL93yoVw&usqp=CAU" alt="nima" width={30} />
                        <p className='m-0 p-0 'style={{color:"green", fontWeight:"bold"}} >Likelar soni bo'yicha</p>
                        <span style={{cursor:"pointer"}} onClick={()=>{setFollow(!follow)}}  ><img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/06-512.png" width={30} alt="" /></span>
                    </div>
                    <div  style={{display: `${followDisplay}`}} className="px-2 border-top">
                    <ol style={{listStyle: "none"}}>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirbsAstM8hvBjlqXyRWe2vhe-EougrVytiQ&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@wunderkind</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0jIk6X01pmFTt2gAn9v_2YQeGSQQyOjFdQ&usqp=CAUg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@sarvi_noz</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxNpeH0qUR6sXEnNWBRXX5l7TIehRkbzF_w&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@nilufar_xon</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pnKy3j6LOi0j4sJvHnAUWIfrN7BEkksy-w&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@rano_sobirova</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsjjLB21a8V9RtBrGiGldTgNRNZ--V4LAzw&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@melidy_princess</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/jaguar-square-1-400x400.jpg.optimal.jpg" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@bekzod_shokh</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9oWeSllR8JuxjxOlalOfCDVNPs-6jiTeuw&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@aziza_ikromova</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='sortItem border'>
                    <div className='leftHeader p-2 d-flex justify-content-between p-0 m-0'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Featured_Star_green.svg/120px-Featured_Star_green.svg.png" width={30} alt="" />
                        <p className='m-0 p-0 ' style={{color:"green", fontWeight:"bold"}}>Eng ko'p Post bo'yicha</p>
                        <span style={{cursor:"pointer"}} onClick={()=>{setPost(!post)}}  ><img src="https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/06-512.png" width={30} alt="" /></span>
                    </div>
                    <div style={{display:`${postDisplay}`}} className="px-2 border-top">
                    <ol style={{listStyle: "none"}}>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoe-H4-8hpPyRv_TlrPCl19U-hZGPSaAg0sxwV-2YkPqP-3Wote9yIUApUNPQLI364Q0&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@azizxon_uzb</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwe-G3TEGjIsgnjY1r5cFJ3J26Wb2xkUTO9V1s97PaGizettMZa6FdTzyP9vMfIFZ_hgk&usqp=CAU  " alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@sarvi_noz</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTswXzcN98Lk-P1q0P6Ux1czu8V8dHNch7Iw&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@nilufar_xon</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3Vo-1u6obXuR4rGjo1BUbOt-u2hbZttXNu8H4DY9RgwgztduUmpoiZyvDHX77jDTo6Y&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@baxrom_tt</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsjjLB21a8V9RtBrGiGldTgNRNZ--V4LAzw&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@tuit_talaba</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CLDXcWb0C5dTVOcMs7SLN3FnlBxx4jnHFrCqdK2lieGY1Lpi5JfW3nNCgqO9N1qPyew&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@shox_relax</span>
                                </div>
                            </li>
                            <li>
                                <div className='leftSideBarList'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9oWeSllR8JuxjxOlalOfCDVNPs-6jiTeuw&usqp=CAU" alt="nima" width={42} style={{border: "2px solid pink", cursor:"pointer", borderRadius: "50%"}}/>
                                    <span style={{fontFamily:"inherit", marginLeft:"5px", fontSize:"1.1rem", cursor:"pointer" }}>@zarnigor</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
