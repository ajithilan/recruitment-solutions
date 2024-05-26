import { Pagination } from '@mui/material'
import '../CSSfiles/talentSearch.sass'
import { Candidate } from "../components/candidate"
import { PrimaryFilter } from "../components/primaryFilter"
import candidateData from '../userDetails/candidatedetails.json'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const TalentSearch = ()=>{
    const [pageNumber, setPageNumber] = useState(1);
    const StartStopValue = useRef({ startElement: 0, stopElement: 16 });
    const filterSel = useSelector(state=>state.filter);
    const saveSel = useSelector(state=>state.saved);
    const [locationActive, setLocationActive] = useState(false);
    const [shiftActive, setShiftActive] = useState(false);
    const [displaySaved, setDisplaySaved] = useState(false);
    const [noCandidateFromFilter, setNoCandidateFromFilter] = useState(false);
    const emptyArr = useRef(false);
    var totalPage;
    const propsToPass = {
        setLocationActive,
        setShiftActive
    }
    const navigate = useNavigate();

    const moveToHomepage = ()=>{
        navigate('/',{ replace : true });
    }

    const displaySavedCandidates = ()=>{ setDisplaySaved(!displaySaved) }

    useEffect(()=>{
        setPageNumber(1);
        StartStopValue.current.startElement = 0;
        StartStopValue.current.stopElement = 16;
    },[displaySaved, filterSel])

    const candidateDataToDisplay = displaySaved ? saveSel.value : candidateData.filter((data)=>{
        return (
            (filterSel.jobTitleTags.length !== 0 ? filterSel.jobTitleTags.some(tag=>(data.job.toLowerCase().replace(/ /g,'')).includes(tag.replace(/ /g,''))) : true)
            && (locationActive ? filterSel.locationTags.includes(data.location) : true)
            && (data.experience >= filterSel.experience.minexp && data.experience <= filterSel.experience.maxexp)
            && (shiftActive ? filterSel.shift === data.shift : true)
        );
    });

    const numberOfValidCandidates = Object.keys(candidateDataToDisplay).length;
    const noOfPages = numberOfValidCandidates/16;
    const modulusOfPages = noOfPages-(noOfPages%1);
    totalPage = noOfPages <= 1 ? 1 : (noOfPages === modulusOfPages ? noOfPages : modulusOfPages+1);

    useEffect(()=>{
        setNoCandidateFromFilter(emptyArr.current ? true : false);
    },[emptyArr.current])

    emptyArr.current = Object.keys(candidateDataToDisplay).length === 0 ? true : false;

    const handlePageChange = (e, pageNo)=>{
        StartStopValue.current.startElement = 16 * (pageNo-1);
        StartStopValue.current.stopElement = 16 * pageNo;
        setPageNumber(pageNo);
        scrollPageToTop();
    }

    const scrollPageToTop = ()=>{
        const candidateContainer = document.querySelector('.candidate_container');
        candidateContainer.style.scrollBehavior = 'smooth';
        candidateContainer.scrollTop = 0;
    }

    return <div className="talent_search">
            <div className="filter_container">
                <PrimaryFilter propsToPass = {propsToPass}/>
            </div>
            <div className="candidate_container">
                <div className="saved_access_bar">
                    <button className="homepage_btn accessbar_btns" onClick={moveToHomepage}>back to homepage</button>
                    <button className={"saved_candidates_btn accessbar_btns " + (displaySaved && "bi-arrow-left active")} onClick={displaySavedCandidates}>{!displaySaved && 'saved candidates'}</button>
                </div>
                <div className="clist_container">
                {
                    noCandidateFromFilter ? <div className='no_candidate_block'>{displaySaved ? 'no candidates saved' : 'no matching candidates'}</div> :
                    candidateDataToDisplay
                    .slice(StartStopValue.current.startElement, StartStopValue.current.stopElement)
                    .map((obj)=>{
                        return <Candidate obj={obj} key={obj.id} displaySaved={displaySaved}/>
                    })
                }
                </div>
                <div className="pagination_container">
                    <Pagination onChange={handlePageChange} page={pageNumber} count={totalPage} size='large' color="primary" sx={{'& .MuiPaginationItem-root': { color: 'white'}}}/>
                </div>
            </div>
            <button className={"scrollTop_btn bi-arrow-up"} onClick={scrollPageToTop}></button>
    </div>
}