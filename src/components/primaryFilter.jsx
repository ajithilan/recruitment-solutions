import { useDispatch, useSelector } from "react-redux";
import { addJobTitleTags, removeJobTitleTags, addLocationTags, removeLocationTags, updateExperience, updateShiftPreference, resetState } from "../features/searchSlice";
import { Slider } from "@mui/material";
import { useEffect, useState } from "react";

export const PrimaryFilter = (props)=>{
    const passedProps = props.propsToPass;
    const dispatch = useDispatch();
    const filterSel = useSelector(store=>store.filter);
    const [jobTitle, setJobTitle] = useState('');
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [dropdownActive, setDropdownActive] = useState(false);
    const jobs = [
        'Catalog associate','Software development engineer - test','Device associate','Quality analyst','Business development associate','ReactJS developer','UI/UX designer','Software development engineer'
    ]
    const locationData = ['Mumbai','Delhi','Chennai','Bangalore','Hyderabad','Kochin','Coimbatore','Kolkata','Uttar pradesh','Pune']
    const [locations, setLocations] = useState(locationData);

    const saveJobTitle = (e)=>{
        const inputValue = e.target.value;
        setJobTitle(inputValue);
        //recommendations
        setDropdownOptions(inputValue.trim() !== '' ? jobs.filter((job)=>{
            return job.toLocaleLowerCase().includes((inputValue).trim().toLocaleLowerCase())
        }) : [])
    }

    const handleSearchThroughEnter = (e)=>{
        e.key === 'Enter' &&  handleSearchThroughButton();
    }

    const handleSearchThroughButton = ()=>{
        const jobTag = jobTitle.trim().toLowerCase();
        jobTag !== '' && dispatchDataToStore(jobTag)
    }

    const handleSearchThroughDropdown = (e)=>{
        const jobTag = e.target.innerText.toLowerCase();
        dispatchDataToStore(jobTag);
    }

    const dispatchDataToStore = (jobTag)=>{
        filterSel.jobTitleTags.includes(jobTag) ? (alert('Job tag already exists'), clearInput()) : (dispatch(addJobTitleTags(jobTag)), clearInput());
    }

    const clearInput = ()=>{
        setJobTitle('');
        setDropdownOptions([]);
    }

    const removeJobTag = (e)=>{ dispatch(removeJobTitleTags(e.target.parentElement.dataset.filter)) }


    const handleLocationSearch = (e)=>{
        e.stopPropagation();
        dispatch(addLocationTags(e.target.innerText));
        setLocations(locations.filter((location)=>{
            return location !== e.target.innerText
        }));
        handleLocationDropdown();
        passedProps.setLocationActive(true);
    }

    const removeLocationTag = (e)=>{
        const tagData = e.target.parentElement.dataset.filter;
        dispatch(removeLocationTags(tagData));
        setLocations([...locations,tagData]);
    }

    useEffect(()=>{
        filterSel.locationTags.length === 0 && passedProps.setLocationActive(false);
    },[filterSel.locationTags.length])

    const handleLocationDropdown = ()=>{ setDropdownActive(!dropdownActive) }

    const handleExperience = (e)=>{ dispatch(updateExperience(e.target.value)) }

    const retrieveShiftData = (e)=>{
        e.target.tagName === 'LABEL' && dispatchShift(e.target.htmlFor);
        e.target.tagName === 'INPUT' && dispatchShift(e.target.value);
    }

    const dispatchShift = (data)=>{
        dispatch(updateShiftPreference(data));
        passedProps.setShiftActive(true);
    }

    const clearFilters = ()=>{
        setLocations([...locations, ...filterSel.locationTags]);
        setDropdownOptions([]);
        setDropdownActive(false);
        setJobTitle('');
        document.querySelectorAll('[name=shift]').forEach((btn)=>{
            btn.checked = false;
        });
        passedProps.setShiftActive(false);
        dispatch(resetState('reset'));
    }

    return <div className="primary_filter">
        <div className="searchby_job_container">
            <div className="search_input_container">
                <input className="job_title" type="text" placeholder="Job title" onChange={saveJobTitle} onKeyDown={handleSearchThroughEnter} value={jobTitle} onFocus={()=>dropdownActive && handleLocationDropdown()}/>
                <span className="clear_input_btn">{jobTitle !== '' && <i className="bi-x" onClick={clearInput}></i>}</span>
                <button className="job_search_btn bi-search" onClick={handleSearchThroughButton}></button>
                <div className="job_dropdown dropdown">{
                    dropdownOptions.map((job)=>{
                        return <span className='option' key={job} onClick={handleSearchThroughDropdown}>{job}</span>
                    })
                }</div>
            </div>
            <div className="job_tags_container tags_container">{
                filterSel.jobTitleTags.length === 0 ? <span className="placeholder">Job tags</span> :
                filterSel.jobTitleTags.map((job)=>{
                    return <span className="tag" data-filter={job} key={job}>{job}<i onClick={removeJobTag} className="remove_btn bi-x"></i></span>
                })
            }</div>
        </div>
        <div className="searchby_location_container">
            <div className="location_dropdown_container" onClick={handleLocationDropdown}>
                <span className="container_title">Select location</span>
                <div className={(dropdownActive ? "bi-caret-up": "bi-caret-down") + " location_dropdown_btn"}></div>
                <div className={"location_dropdown dropdown " + (dropdownActive && 'active')}>
                    {
                        locations.sort().map((location)=>{
                            return <span key={location} className="location_option option" onClick={handleLocationSearch}>{location}</span>
                        })
                    }
                </div>
            </div>
            <div className="location_tags_container tags_container">{
                filterSel.locationTags.length === 0 ? <span className="placeholder">Location tags</span> :
                filterSel.locationTags.map((location)=>{
                    return <span className="tag" data-filter={location} key={location}>{location}<i onClick={removeLocationTag} className="remove_btn bi-x"></i></span>
                })
            }</div>
        </div>
        <div className="searchby_exp_container">
            <span className="exp_title container_title">Experience - years</span>
            <Slider
                getAriaLabel={()=>'experience'}
                size="small"
                min={0}
                max={10}
                step={1}
                value={[filterSel.experience.minexp, filterSel.experience.maxexp]}
                onChange={handleExperience}
                valueLabelDisplay="auto"
                sx={{width:'100%'}}
                disableSwap
            />
            <div className="min_exp exp container_title">minimum experience : <span>{filterSel.experience.minexp}</span></div>
            <div className="max_exp exp container_title">maximum experience : <span>{filterSel.experience.maxexp}</span></div>
        </div>
        <div className="shift_container" onClick={retrieveShiftData}>
            <span className="shift_title">Shift availability </span>
            <div className="shift_radio">
                <div>
                    <input type="radio" id="Day" name="shift" value="Day"/>
                    <label htmlFor="Day">Day</label>
                </div>
                <div>
                    <input type="radio" id="Night" name="shift" value="Night"/>
                    <label htmlFor="Night">Night</label>
                </div>
                <div>
                    <input type="radio" id="Flexible" name="shift" value="Flexible"/>
                    <label htmlFor="Flexible">Flexible</label>
                </div>
            </div>
        </div>
        <button className="clearFilter_btn" onClick={clearFilters}>Clear filters</button>
    </div>
}