import { Avatar } from "@mui/material";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { removeCandidateData, saveCandidateData } from "../features/savedSlice";

export const Candidate = (props)=>{
    const obj = props.obj;
    const [color, setColor] = useState('');
    const listofColors = [
        '#4C3A51','#232D3F','#451952','#662549','#AE445A','#183D3D','#352F44','#3F1D38','#4D3C77','#1F6E8C','#0E2954','#5F264A','#393646','#4F4557'
    ]
    const dispatch = useDispatch();
    const saveSelector = useSelector(state=>state.saved)

    const generateColor = ()=>{
        const tempColor = listofColors[Math.floor(Math.random() * listofColors.length)];
        setColor(color === tempColor ? generateColor() : tempColor);
    }

    useEffect(()=>{
        generateColor();
    },[])

    const toggleInfo = (e)=>{
        const parent = e.target.parentElement;
        document.querySelectorAll('.candidate').forEach(el=>{(el.classList.contains('view') && el!==parent) && (el.classList.remove('view'),rotate(el.querySelector('.details_btn')))});
        rotate(e.target);
        parent.classList.toggle('view')
    }

    function rotate(e){
        !e.classList.contains('r180') ?
            (e.classList.contains('r360') ? (e.classList.remove('r360'), setTimeout(() => { e.classList.add('r180') }, 50)): e.classList.add('r180')) :
            (e.classList.remove('r180'),e.classList.add('r360'));
    }

    const retrieveLetters = ()=>{
        let displayLetters = '';
        let temp = obj.name.split(' ')
        temp.forEach((el)=>{
            displayLetters += el[0]
        })
        return displayLetters;
    }

    const saveCandidate = (e, obj) =>{ dispatch(saveCandidateData(obj)) }

    const removeCandidate = (id) =>{ dispatch(removeCandidateData(id)) }

    return <div className="candidate"  id={obj.id}>{
        !props.displaySaved ? <button className={(saveSelector.id.includes(obj.id) ? "bi-check2 saved" : "bi-person-plus") + " save_candidate_btn candidate_btn"} onClick={(e)=>saveCandidate(e,obj)}></button> :
        <button className={"remove_candidate_btn candidate_btn bi-x-lg"} onClick={()=>removeCandidate(obj.id)}></button>
    }
        <div className="image_container">
            <Avatar className="avatar" sx={{width:'100px',height:'100px', fontSize: '32px', fontWeight: 600, bgcolor: color}}>{retrieveLetters()}</Avatar>
        </div>
        <div className="main_details_container">
            <div><i className="bi-person-badge"></i>{obj.name}</div>
            <div><i className="bi-code-slash"></i><span className="hidden info_title">role : </span>{obj.job.toLowerCase()}</div>
            <div><i className="bi-pin-map"></i><span className="hidden info_title">location : </span>{obj.location}</div>
        </div>
        <div className="more_details_container">
            <div className="info_title"><i className="bi-buildings"></i>current company : <span>{obj.company.toLowerCase()}</span></div>
            <div className="info_title"><i className="bi-currency-rupee"></i>current ctc : <span>{obj.salary} lpa</span></div>
            <div className="info_title"><i className="bi-bookmark-star"></i>y.o.e : <span>{obj.experience}</span></div>
            <div className="info_title"><i className="bi-geo-alt"></i>willing to relocate : <span>{obj.relocate}</span></div>
            <div className="info_title"><i className="bi-clock-history"></i>shift flexibility : <span>{obj.shift}</span></div>
        </div>
        <button className="details_btn" onClick={toggleInfo}><i className="bi-chevron-double-down"></i></button>
    </div>
}